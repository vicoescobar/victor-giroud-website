# Victor Giroud — Site & Portfolio Vue 3

Site personnel et portfolio développé avec **Vue 3** et **Vite**, avec déploiement continu automatique sur **VPS CloudPanel** via **GitHub Actions** et **rsync**.

---

## 🚀 Développement Local

### Prérequis
- Node.js (version 20+ ou 22+ recommandée)
- npm

### Installation & Lancement

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement local
npm run dev

# Compiler pour la production
npm run build
```

---

## 🌐 Déploiement Continu sur VPS (CloudPanel)

Le déploiement est entièrement automatisé via le workflow [deploy.yml](.github/workflows/deploy.yml). À chaque `git push` sur la branche `main`, GitHub Actions compile le projet et synchronise le dossier `dist/` sur le VPS.

### 1. Configuration sur CloudPanel

1. Connectez-vous à votre interface **CloudPanel**.
2. Créez un nouveau site :
   - Type de site : **Static HTML/JS**
   - Domaine : votre nom de domaine (ex: `victor-giroud.com`)
   - Utilisateur du site : notez le nom de l'utilisateur créé (ex: `victor-site`).
3. **Routage SPA (Nginx VHost)** :
   - Rendez-vous dans l'onglet **Vhost** de votre site dans CloudPanel.
   - Assurez-vous que la directive `try_files` redirige vers `index.html` pour éviter les erreurs 404 lors du rafraîchissement d'une route :
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```
   - Sauvegardez la configuration.

---

### 2. Configuration de l'accès SSH

Pour permettre à GitHub Actions de déposer les fichiers sur votre VPS en toute sécurité :

1. **Générez une paire de clés SSH dédiée** (sur votre machine locale ou directement sur le VPS) :
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-cloudpanel" -f ~/.ssh/github_actions_vps -N ""
   ```
2. **Ajoutez la clé publique (`github_actions_vps.pub`) sur le VPS** :
   - Dans CloudPanel : Allez sur le site ou les paramètres du serveur -> **SSH Users** -> Ajoutez votre clé publique.
   - Ou manuellement en SSH : ajoutez le contenu du fichier `.pub` dans `/home/<site-user>/.ssh/authorized_keys`.

---

### 3. Configuration des GitHub Secrets

Sur GitHub, rendez-vous dans votre dépôt :
`Settings` ➔ `Secrets and variables` ➔ `Actions` ➔ `New repository secret`.

Créez les 4 secrets suivants :

| Secret | Description | Exemple |
| :--- | :--- | :--- |
| `SSH_HOST` | Adresse IP de votre VPS ou sous-domaine | `123.45.67.89` |
| `SSH_USER` | Utilisateur SSH (celui du site CloudPanel) | `victor-site` |
| `SSH_PRIVATE_KEY` | Contenu de la clé privée (`github_actions_vps`) | `-----BEGIN OPENSSH PRIVATE KEY----- ...` |
| `SSH_TARGET_DIR` | Répertoire racine du site dans CloudPanel | `/home/victor-site/htdocs/votre-domaine.com/` |
| `SSH_PORT` *(optionnel)* | Port SSH de votre VPS (par défaut 22) | `22` |

---

### 4. Déclenchement du déploiement

Dès que vous poussez sur `main` :
```bash
git add .
git commit -m "feat: setup vue app and deployment workflow"
git push origin main
```
Le workflow GitHub Actions se lance dans l'onglet **Actions** de votre dépôt GitHub et synchronise les fichiers en quelques secondes !
