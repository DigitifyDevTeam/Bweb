<?php
declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$senderEmail = getenv('BWEB_SMTP_USERNAME') ?: 'dev.digitify@gmail.com';
$senderPassword = getenv('BWEB_SMTP_APP_PASSWORD') ?: 'kkal bahm mufg tawv';
$receiverEmail = getenv('BWEB_CONTACT_RECEIVER') ?: 'rebhi.walid@gmail.com';

if ($senderPassword === '') {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'SMTP password not configured']);
    exit;
}

$payload = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload']);
    exit;
}

$firstName = trim((string) ($payload['firstName'] ?? ''));
$lastName = trim((string) ($payload['lastName'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$phone = trim((string) ($payload['phone'] ?? ''));
$topic = trim((string) ($payload['topic'] ?? ''));
$size = trim((string) ($payload['size'] ?? ''));
$preference = trim((string) ($payload['preference'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));

if (
    $firstName === '' || $lastName === '' || $email === '' || $phone === '' ||
    $topic === '' || $size === '' || $preference === '' || $message === ''
) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required contact fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email']);
    exit;
}

$safe = static function (string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};

$submittedAt = date('d/m/Y H:i');
$fullName = trim($firstName . ' ' . $lastName);
$preferenceLabel = $preference === 'call'
    ? 'Consultation personnalisée (appel)'
    : 'Informations par e-mail';

$subject = '[BWEB] Nouveau lead contact - ' . $fullName;
$html = '
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>' . $safe($subject) . '</title>
  </head>
  <body style="margin:0;padding:0;background:#f2f4fb;font-family:Inter,Arial,sans-serif;color:#1b2340;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:32px 16px;background:#f2f4fb;">
      <tr>
        <td align="center">
          <table role="presentation" width="680" cellspacing="0" cellpadding="0" style="width:100%;max-width:680px;background:#ffffff;border:1px solid #dbe4ff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;background:linear-gradient(135deg,#5b8def,#9b6cff 60%,#22d3ee);color:#ffffff;">
                <p style="margin:0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;opacity:0.9;">Nouveau message site web</p>
                <h1 style="margin:10px 0 0;font-size:26px;line-height:1.2;font-weight:800;">Lead entrant depuis la page Contact</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;">
                  <tr><td style="font-size:13px;color:#62709d;width:180px;">Nom complet</td><td style="font-size:15px;font-weight:600;color:#1b2340;">' . $safe($fullName) . '</td></tr>
                  <tr><td style="font-size:13px;color:#62709d;">E-mail</td><td style="font-size:15px;font-weight:600;"><a href="mailto:' . $safe($email) . '" style="color:#3557d4;text-decoration:none;">' . $safe($email) . '</a></td></tr>
                  <tr><td style="font-size:13px;color:#62709d;">Téléphone</td><td style="font-size:15px;font-weight:600;"><a href="tel:' . $safe($phone) . '" style="color:#3557d4;text-decoration:none;">' . $safe($phone) . '</a></td></tr>
                  <tr><td style="font-size:13px;color:#62709d;">Sujet</td><td style="font-size:15px;font-weight:600;color:#1b2340;">' . $safe($topic) . '</td></tr>
                  <tr><td style="font-size:13px;color:#62709d;">Taille entreprise</td><td style="font-size:15px;font-weight:600;color:#1b2340;">' . $safe($size) . '</td></tr>
                  <tr><td style="font-size:13px;color:#62709d;">Préférence</td><td style="font-size:15px;font-weight:600;color:#1b2340;">' . $safe($preferenceLabel) . '</td></tr>
                  <tr><td style="font-size:13px;color:#62709d;">Reçu le</td><td style="font-size:15px;font-weight:600;color:#1b2340;">' . $safe($submittedAt) . '</td></tr>
                </table>
                <div style="margin-top:20px;padding:16px 18px;border:1px solid #dbe4ff;border-radius:12px;background:#f7f9ff;">
                  <p style="margin:0 0 8px;font-size:13px;color:#62709d;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
                  <p style="margin:0;font-size:15px;line-height:1.65;color:#1b2340;">' . nl2br($safe($message)) . '</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>';

$text = implode("\n", [
    'Nouveau lead depuis la page Contact',
    '',
    'Nom complet: ' . $fullName,
    'Email: ' . $email,
    'Téléphone: ' . $phone,
    'Sujet: ' . $topic,
    'Taille entreprise: ' . $size,
    'Préférence: ' . $preferenceLabel,
    'Reçu le: ' . $submittedAt,
    '',
    'Message:',
    $message,
]);

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $senderEmail;
    $mail->Password = $senderPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 0;

    $mail->setFrom($senderEmail, 'BWEB Contact');
    $mail->addAddress($receiverEmail, 'BWEB Admin');
    $mail->addReplyTo($email, $fullName);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $html;
    $mail->AltBody = $text;
    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Votre message a été envoyé avec succès.',
    ]);
} catch (Exception $e) {
    http_response_code(500);
    error_log('BWEB contact email error: ' . $e->getMessage());
    error_log('PHPMailer ErrorInfo: ' . $mail->ErrorInfo);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur lors de l\'envoi de l\'email.',
    ]);
}
