export interface ContactLeadData {
  firstName: string
  lastName: string
  email: string
  phone: string
  topic: string
  size: string
  preference: 'call' | 'email'
  message: string
}

interface ContactEmailTemplateInput {
  lead: ContactLeadData
  submittedAt?: Date
}

export interface ContactEmailPayload {
  to: string
  replyTo: string
  subject: string
  html: string
  text: string
  submittedAtIso: string
  lead: ContactLeadData
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function preferenceLabel(value: ContactLeadData['preference']): string {
  return value === 'call'
    ? 'Consultation personnalisée (appel)'
    : 'Informations détaillées par e-mail'
}

function formatSubmittedAt(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date)
}

export function buildContactAdminEmailTemplate({
  lead,
  submittedAt = new Date(),
}: ContactEmailTemplateInput): { subject: string; html: string; text: string; submittedAtIso: string } {
  const safeMessage = escapeHtml(lead.message).replaceAll('\n', '<br />')
  const safeFullName = escapeHtml(`${lead.firstName} ${lead.lastName}`)
  const safeTopic = escapeHtml(lead.topic)
  const safeCompanySize = escapeHtml(lead.size)
  const safePreference = escapeHtml(preferenceLabel(lead.preference))
  const safePhone = escapeHtml(lead.phone)
  const safeEmail = escapeHtml(lead.email)
  const sentAtLabel = escapeHtml(formatSubmittedAt(submittedAt))

  const subject = `Nouveau lead contact - ${lead.firstName} ${lead.lastName}`

  const html = `
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
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
                  <tr>
                    <td style="font-size:13px;color:#62709d;width:180px;">Nom complet</td>
                    <td style="font-size:15px;font-weight:600;color:#1b2340;">${safeFullName}</td>
                  </tr>
                  <tr>
                    <td style="font-size:13px;color:#62709d;">E-mail</td>
                    <td style="font-size:15px;font-weight:600;"><a href="mailto:${safeEmail}" style="color:#3557d4;text-decoration:none;">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="font-size:13px;color:#62709d;">Téléphone</td>
                    <td style="font-size:15px;font-weight:600;"><a href="tel:${safePhone}" style="color:#3557d4;text-decoration:none;">${safePhone}</a></td>
                  </tr>
                  <tr>
                    <td style="font-size:13px;color:#62709d;">Sujet</td>
                    <td style="font-size:15px;font-weight:600;color:#1b2340;">${safeTopic}</td>
                  </tr>
                  <tr>
                    <td style="font-size:13px;color:#62709d;">Taille entreprise</td>
                    <td style="font-size:15px;font-weight:600;color:#1b2340;">${safeCompanySize}</td>
                  </tr>
                  <tr>
                    <td style="font-size:13px;color:#62709d;">Préférence</td>
                    <td style="font-size:15px;font-weight:600;color:#1b2340;">${safePreference}</td>
                  </tr>
                  <tr>
                    <td style="font-size:13px;color:#62709d;">Reçu le</td>
                    <td style="font-size:15px;font-weight:600;color:#1b2340;">${sentAtLabel}</td>
                  </tr>
                </table>

                <div style="margin-top:20px;padding:16px 18px;border:1px solid #dbe4ff;border-radius:12px;background:#f7f9ff;">
                  <p style="margin:0 0 8px;font-size:13px;color:#62709d;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
                  <p style="margin:0;font-size:15px;line-height:1.65;color:#1b2340;">${safeMessage}</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`.trim()

  const text = [
    'Nouveau lead depuis la page Contact',
    '',
    `Nom complet: ${lead.firstName} ${lead.lastName}`,
    `Email: ${lead.email}`,
    `Téléphone: ${lead.phone}`,
    `Sujet: ${lead.topic}`,
    `Taille entreprise: ${lead.size}`,
    `Préférence: ${preferenceLabel(lead.preference)}`,
    `Reçu le: ${formatSubmittedAt(submittedAt)}`,
    '',
    'Message:',
    lead.message,
  ].join('\n')

  return {
    subject,
    html,
    text,
    submittedAtIso: submittedAt.toISOString(),
  }
}

export function buildContactAdminPayload(params: {
  lead: ContactLeadData
  adminEmail: string
}): ContactEmailPayload {
  const { lead, adminEmail } = params
  const { subject, html, text, submittedAtIso } = buildContactAdminEmailTemplate({ lead })

  return {
    to: adminEmail,
    replyTo: lead.email,
    subject,
    html,
    text,
    submittedAtIso,
    lead,
  }
}
