# Configuration Email - Docteur Déménagement

## Configuration Gmail OAuth

Le système utilise OAuth 2.0 pour l'authentification Gmail, ce qui est plus sécurisé que les mots de passe d'application.

### Configuration OAuth

1. **Configurez le fichier `send-email.php`** :
   - Ouvrez `public/api/send-email.php`
   - Remplacez les valeurs suivantes :
     - `VOTRE_CLIENT_ID` : Votre Client ID Gmail OAuth
     - `VOTRE_CLIENT_SECRET` : Votre Client Secret Gmail OAuth
     - `VOTRE_REFRESH_TOKEN` : Votre Refresh Token Gmail OAuth
   - Sauvegardez le fichier

### Où trouver ces informations ?

Si vous avez déjà configuré OAuth Gmail API, vous devriez avoir :
- **Client ID** : Dans Google Cloud Console → Credentials
- **Client Secret** : Dans Google Cloud Console → Credentials
- **Refresh Token** : Généré lors de la configuration OAuth

### Scopes requis

Assurez-vous que votre application OAuth a les scopes suivants :
- `https://www.googleapis.com/auth/gmail.send`
- `https://www.googleapis.com/auth/gmail.compose`

### Installation de PHPMailer

Si PHPMailer n'est pas déjà installé via Composer, vous devez le télécharger :

1. Téléchargez PHPMailer depuis : https://github.com/PHPMailer/PHPMailer
2. Extrayez le dossier `PHPMailer` dans `public/api/`
3. La structure doit être : `public/api/PHPMailer/src/PHPMailer.php`

### Test

Une fois configuré, testez le formulaire sur votre site. Si vous rencontrez des erreurs :
- Vérifiez que le mot de passe d'application est correct
- Vérifiez que la validation en 2 étapes est activée
- Vérifiez les logs d'erreur PHP de votre serveur

### Sécurité

⚠️ **Important** : Ne commitez jamais le fichier `send-email.php` avec le mot de passe réel dans Git. Utilisez des variables d'environnement ou un fichier de configuration séparé.
