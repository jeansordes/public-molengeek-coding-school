# 📤 Comment soumettre ton projet sur GitHub

Ce guide t'explique **pas à pas** comment mettre ton code sur GitHub pour le soumettre.

---

## 🤔 C'est quoi GitHub ?

**GitHub** est un site web qui permet de stocker ton code en ligne. C'est comme un "Google Drive pour le code".

Ça permet de :
- Sauvegarder ton travail en ligne (plus de peur de perdre ton code !)
- Partager ton code avec d'autres personnes (comme ton formateur 😉)
- Montrer tes projets à de futurs employeurs

---

## 🖥️ C'est quoi un terminal ?

Le **terminal** (aussi appelé "console" ou "ligne de commande") est un outil qui te permet de communiquer avec ton ordinateur **en écrivant des commandes texte** au lieu de cliquer sur des boutons.

C'est un peu comme envoyer des SMS à ton ordinateur pour lui dire quoi faire.

**Exemple :** Au lieu de double-cliquer sur un dossier pour l'ouvrir, tu peux taper une commande comme `cd mon-dossier` pour y accéder.

> 💡 **Pas de panique !** Tu n'as besoin de connaître que quelques commandes simples pour ce guide.

---

## ✅ Pré-requis

Avant de commencer, assure-toi d'avoir :

1. ✅ **Un compte GitHub** → Crée-en un gratuitement sur [github.com](https://github.com)
2. ✅ **Visual Studio Code (VS Code)** installé sur ton ordinateur
3. ✅ **Git** installé sur ton ordinateur (on va vérifier ensemble)
4. ✅ **Ton dossier de projet** avec tes fichiers (`index.html`, `style.css`, etc.)

---

## 🔧 Étape 0 : Vérifier que Git est installé

### 0.1 — Ouvrir le terminal dans VS Code

1. Ouvre **Visual Studio Code**
2. Ouvre ton dossier de projet : `Fichier` → `Ouvrir un dossier...` → sélectionne le dossier de ton TP
3. Ouvre le terminal intégré :
   - **Windows/Linux** : appuie sur `` Ctrl + ` `` (la touche sous Échap, avec le symbole `)
   - **Mac** : appuie sur `` Cmd + ` ``
   - **Ou** clique sur `Terminal` dans le menu du haut → `Nouveau terminal`

> 💡 Un panneau noir apparaît en bas de VS Code : c'est le terminal !

### 0.2 — Vérifier que Git est installé

Dans le terminal, tape cette commande puis appuie sur **Entrée** :

```bash
git --version
```

**Si Git est installé**, tu verras quelque chose comme :
```
git version 2.43.0
```
→ C'est bon, passe à l'étape 1 ! ✅

**Si tu vois une erreur** du genre "git n'est pas reconnu" :
→ Tu dois installer Git. Télécharge-le sur [git-scm.com](https://git-scm.com/downloads) et installe-le, puis **redémarre VS Code**.

---

## 📝 Étape 1 : Configurer Git (une seule fois)

Si c'est la **première fois** que tu utilises Git sur ton ordinateur, tu dois te présenter à Git.

Tape ces deux commandes dans le terminal (remplace par **tes vraies infos**) :

```bash
git config --global user.name "Ton Prénom Ton Nom"
```

Appuie sur **Entrée**, puis tape :

```bash
git config --global user.email "ton.email@exemple.com"
```

> ⚠️ **Utilise le même email que ton compte GitHub !**

---

## 🌐 Étape 2 : Créer un repository sur GitHub

Un **repository** (ou "repo") est un dossier en ligne sur GitHub qui va contenir ton code.

### 2.1 — Aller sur GitHub

1. Va sur [github.com](https://github.com)
2. Connecte-toi à ton compte

### 2.2 — Créer un nouveau repository

1. Clique sur le bouton vert **"New"** (ou le **+** en haut à droite → "New repository")

2. Remplis les informations :
   - **Repository name** : `mon-profil` (ou le nom que tu veux, sans espaces ni accents)
   - **Description** : `Ma page de profil en HTML/CSS` (optionnel)
   - **Public** : sélectionne cette option (pour que je puisse voir ton projet)
   - ⚠️ **NE COCHE PAS** "Add a README file"
   - ⚠️ **NE COCHE PAS** "Add .gitignore"

3. Clique sur le bouton vert **"Create repository"**

### 2.3 — Copier les commandes

Après la création, GitHub te montre une page avec des instructions.

Cherche la section **"…or push an existing repository from the command line"**.

Tu vas voir 3 lignes de commandes. **Garde cette page ouverte**, on va les utiliser juste après !

---

## 💻 Étape 3 : Préparer ton code pour l'envoi

Retourne dans **VS Code** avec ton terminal ouvert.

### 3.1 — Initialiser Git dans ton dossier

Tape cette commande :

```bash
git init
```

> 💡 Cette commande dit à Git : "Hey, je veux suivre les modifications de ce dossier !"

### 3.2 — Ajouter tous tes fichiers

Tape cette commande :

```bash
git add .
```

> 💡 Le point `.` signifie "tous les fichiers". Cette commande prépare tous tes fichiers pour l'envoi.

### 3.3 — Créer ta première "sauvegarde" (commit)

Tape cette commande :

```bash
git commit -m "Premier commit - Mon projet de profil"
```

> 💡 Un **commit** est comme une photo de ton code à un instant T. Le texte entre guillemets est une description de ce que tu as fait.

---

## 🚀 Étape 4 : Envoyer ton code sur GitHub

Maintenant, on va lier ton dossier local à ton repository GitHub et envoyer le code.

### 4.1 — Lier ton dossier au repository GitHub

Retourne sur la page GitHub (celle avec les instructions après la création du repo).

Copie-colle la première commande qui ressemble à ça (avec **ton** nom d'utilisateur et **ton** nom de repo) :

```bash
git remote add origin https://github.com/TON-USERNAME/mon-profil.git
```

### 4.2 — Renommer la branche principale

Tape cette commande :

```bash
git branch -M main
```

### 4.3 — Envoyer ton code !

Tape cette commande :

```bash
git push -u origin main
```

### 4.4 — S'authentifier (si demandé)

GitHub peut te demander de t'authentifier :

**Option 1 - Fenêtre de connexion GitHub :**
- Une fenêtre peut s'ouvrir te demandant de te connecter à GitHub
- Connecte-toi normalement avec ton compte

**Option 2 - Dans le terminal :**
- Si on te demande ton **username** : entre ton nom d'utilisateur GitHub
- Si on te demande un **password** : ⚠️ **Ce n'est pas ton mot de passe !** Tu dois créer un "Personal Access Token" (voir section aide ci-dessous)

---

## ✅ Étape 5 : Vérifier que ça a marché

1. Retourne sur [github.com](https://github.com)
2. Clique sur ton profil en haut à droite → "Your repositories"
3. Tu devrais voir ton repository `mon-profil` avec tous tes fichiers !

---

## 📤 Étape 6 : Envoyer le lien

Pour soumettre ton projet, envoie le lien de ton repository. Il ressemble à ça :

```
https://github.com/TON-USERNAME/mon-profil
```

Tu peux le copier directement depuis la barre d'adresse de ton navigateur quand tu es sur la page de ton repo.

---

## 🔄 Bonus : Mettre à jour ton code

Si tu fais des modifications après avoir envoyé ton code, voici comment les mettre en ligne :

```bash
git add .
git commit -m "Description de ce que j'ai changé"
git push
```

---

## ❓ Aide et problèmes courants

### "git n'est pas reconnu comme commande"
→ Git n'est pas installé. Télécharge-le sur [git-scm.com](https://git-scm.com/downloads) et redémarre VS Code.

### "Permission denied" ou problème d'authentification
→ Tu dois créer un **Personal Access Token** :
1. Va sur GitHub → Clique sur ta photo de profil → **Settings**
2. Descends dans le menu de gauche → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**
4. Donne un nom au token (ex: "Mon PC")
5. Coche la case **repo**
6. Clique sur **Generate token**
7. **Copie le token** (tu ne pourras plus le voir après !)
8. Utilise ce token comme "mot de passe" quand Git te le demande

### "error: remote origin already exists"
→ Tape `git remote remove origin` puis refais la commande `git remote add origin ...`

### "fatal: not a git repository"
→ Tu n'as pas fait `git init`. Tape cette commande d'abord.

### Le terminal dit qu'il ne trouve pas mon dossier
→ Vérifie que tu as bien ouvert **le bon dossier** dans VS Code (`Fichier` → `Ouvrir un dossier...`)

---

## 📚 Récapitulatif des commandes

| Commande | Ce qu'elle fait |
|----------|-----------------|
| `git init` | Initialise Git dans le dossier |
| `git add .` | Prépare tous les fichiers pour l'envoi |
| `git commit -m "message"` | Crée une sauvegarde avec un message |
| `git remote add origin URL` | Lie ton dossier au repo GitHub |
| `git branch -M main` | Nomme la branche principale "main" |
| `git push -u origin main` | Envoie le code sur GitHub (1ère fois) |
| `git push` | Envoie les nouvelles modifications |

---

## 🎉 Bravo !

Si tu es arrivé jusqu'ici, ton code est maintenant sur GitHub ! 

Tu peux être fier·e de toi, tu viens de faire ta première contribution sur GitHub — une compétence essentielle pour tout développeur ! 🚀
