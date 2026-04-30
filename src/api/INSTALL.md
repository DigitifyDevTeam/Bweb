# Installation de PHPMailer

## Option 1 : Via Composer (Recommandé)

Si Composer est disponible sur votre serveur Infomaniak :

1. Dans le dossier `public/api/`, exécutez :
```bash
composer install
```

2. Cela installera PHPMailer et toutes ses dépendances dans `public/api/vendor/`

3. Le fichier `send-email.php` utilisera automatiquement Composer

## Option 2 : Téléchargement manuel

Si Composer n'est pas disponible, téléchargez uniquement les fichiers nécessaires :

### Fichiers requis pour OAuth Gmail :

1. Téléchargez ces 4 fichiers depuis GitHub :
   - https://github.com/PHPMailer/PHPMailer/blob/master/src/Exception.php
   - https://github.com/PHPMailer/PHPMailer/blob/master/src/PHPMailer.php
   - https://github.com/PHPMailer/PHPMailer/blob/master/src/SMTP.php
   - https://github.com/PHPMailer/PHPMailer/blob/master/src/OAuth.php

2. Créez la structure de dossiers :
```
public/api/PHPMailer/src/
```

3. Placez les 4 fichiers dans `public/api/PHPMailer/src/`

4. Dans `send-email.php`, décommentez les lignes manuelles et commentez la ligne Composer :
```php
// require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';
require_once __DIR__ . '/PHPMailer/src/OAuth.php';
```

### Dépendances OAuth supplémentaires

Pour OAuth Gmail, vous aurez aussi besoin de :
- **Google Auth Library** (si vous utilisez Composer, c'est automatique)
- Sinon, vous pouvez utiliser la fonction `getAccessToken()` déjà incluse dans `send-email.php`

## Vérification

Une fois installé, testez le formulaire. Si vous voyez des erreurs de classe non trouvée, vérifiez que tous les fichiers sont bien présents.
