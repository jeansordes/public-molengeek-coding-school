# 🎨 TP — Page de profil

## 📋 Objectif

Tu dois construire une **page de profil** en HTML/CSS, comme un mini-portfolio.

**Durée estimée :** 3-4h

**Règles :**
- Pas de framework CSS (Bootstrap, Tailwind...)
- Pas de JavaScript
- Pas besoin de responsive

---

## 🗂️ Fichiers à créer

```
mon-projet/
├── index.html
├── style.css
└── assets/
    └── avatar.jpg (ou .png)
```

---

## 🖼️ Résultat attendu

Ta page doit contenir :
- Un **header** avec ta photo, ton nom, ton rôle et un bouton de contact
- Une section **À propos** avec ta présentation
- Une section **Compétences** avec des badges/pastilles
- Une section **Projets** avec 3 cartes
- Une section **Parcours** (timeline simple)
- Un **footer** avec liens et copyright

---

# 📝 Partie 1 : HTML

## 1.1 — Structure de base

Crée un fichier `index.html` avec la structure HTML5 de base :
- Doctype HTML5
- Langue française
- Encodage UTF-8
- Lien vers ton fichier CSS

<details>
<summary>💡 Indice : structure HTML5</summary>

Une page HTML5 commence toujours par :
```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>...</title>
</head>
<body>
  ...
</body>
</html>
```

Pour lier le CSS, utilise la balise `<link>` dans le `<head>`.

</details>

---

## 1.2 — Header (en-tête)

Crée un `<header>` qui contient :
- Ta photo de profil (image dans `assets/`)
- Ton prénom et nom (titre principal)
- Ton rôle (ex: "Développeur Web Junior")
- Ta localisation (ex: "📍 Bruxelles")
- Ton email
- Un bouton "Contacter" qui ouvre l'application mail

<details>
<summary>💡 Indice : structurer le header</summary>

Utilise un conteneur `<div class="container">` pour centrer le contenu.

Pour le texte à côté de l'image, regroupe tout dans une `<div class="header-text">`.

</details>

<details>
<summary>💡 Indice : image avec alt</summary>

Une image s'écrit : `<img src="chemin/image.jpg" alt="Description">`

L'attribut `alt` est **obligatoire** pour l'accessibilité.

</details>

<details>
<summary>💡 Indice : lien mailto</summary>

Pour créer un lien qui ouvre l'application mail :
```html
<a href="mailto:ton@email.com">Texte du lien</a>
```

</details>

<details>
<summary>🚀 Challenge</summary>

- Ajoute une icône avant ton email (emoji ou Font Awesome)
- Ajoute un lien vers ton LinkedIn ou GitHub dans le header

</details>

---

## 1.3 — Section "À propos"

Dans une balise `<main>`, crée une `<section>` avec :
- Un titre "À propos"
- Un paragraphe de 5-8 lignes te présentant

<details>
<summary>💡 Indice : structure section</summary>

```html
<section class="section" id="about">
  <h2>Titre</h2>
  <p>Contenu...</p>
</section>
```

L'attribut `id` permet de créer des ancres pour la navigation.

</details>

<details>
<summary>🚀 Challenge</summary>

Ajoute une navigation en haut de page avec des liens vers chaque section (`#about`, `#skills`, etc.)

</details>

---

## 1.4 — Section "Compétences"

Crée une section avec :
- Un titre "Compétences"
- Une liste de 8-12 compétences (HTML, CSS, Git, etc.)

<details>
<summary>💡 Indice : liste de compétences</summary>

Utilise une liste non ordonnée `<ul>` avec des `<li>` pour chaque compétence.

Exemple :
```html
<ul class="skills">
  <li class="badge">HTML</li>
  ...
</ul>
```

</details>

---

## 1.5 — Section "Projets"

Crée une section avec 3 cartes de projet. Chaque carte doit avoir :
- Un titre de projet
- Une description (2-3 lignes)
- 2-3 tags (technologies utilisées)
- Un lien "Voir le projet"

<details>
<summary>💡 Indice : structure d'une carte</summary>

Utilise `<article>` pour chaque carte (sémantiquement correct pour du contenu autonome).

```html
<article class="card">
  <h3>Titre</h3>
  <p>Description...</p>
  <p class="tags">
    <span class="tag">HTML</span>
    ...
  </p>
  <a href="#">Voir</a>
</article>
```

</details>

<details>
<summary>💡 Indice : ouvrir dans un nouvel onglet</summary>

Ajoute `target="_blank"` à ton lien pour qu'il s'ouvre dans un nouvel onglet.

</details>

<details>
<summary>🚀 Challenge</summary>

- Ajoute une image/capture d'écran à chaque carte projet
- Utilise de vraies URLs vers tes projets GitHub ou des démos

</details>

---

## 1.6 — Section "Parcours"

Crée une section avec ton parcours (formation, expériences) sous forme de liste :
- Année en gras
- Description de l'étape

<details>
<summary>💡 Indice : texte en gras</summary>

Pour mettre du texte en gras, utilise `<strong>` (sémantique) ou `<b>` (visuel).

```html
<li><strong>2024</strong> — Formation Développeur Web</li>
```

</details>

---

## 1.7 — Footer

Crée un `<footer>` avec :
- Liens vers tes réseaux (GitHub, LinkedIn...)
- Copyright avec l'année

<details>
<summary>💡 Indice : symbole copyright</summary>

Tu peux utiliser `©` directement ou l'entité HTML `&copy;`

</details>

---

# 🎨 Partie 2 : CSS

## 2.1 — Reset et base

Configure les styles de base :
- Une couleur de fond pour le `body` (claire, genre `#f5f5f5`)
- Une couleur de texte sombre
- Une police lisible

<details>
<summary>💡 Indice : propriétés du body</summary>

Les propriétés principales :
- `background` ou `background-color` → couleur de fond
- `color` → couleur du texte
- `font-family` → police (ex: `Arial, sans-serif`)

</details>

---

## 2.2 — Container centré

Crée une classe `.container` qui :
- A une largeur fixe (ex: 900px)
- Est centrée horizontalement

<details>
<summary>💡 Indice : centrer un bloc</summary>

Pour centrer un bloc de largeur fixe :
```css
margin-left: auto;
margin-right: auto;
```
ou en raccourci : `margin: 0 auto;`

</details>

---

## 2.3 — Header avec Flexbox

Le header doit avoir :
- Un fond blanc
- Du padding (espacement intérieur)
- L'avatar à gauche, le texte à droite (sur la même ligne)

<details>
<summary>💡 Indice : mettre deux éléments côte à côte</summary>

Flexbox permet d'aligner des éléments sur une ligne :
```css
display: flex;
gap: 20px; /* espace entre les éléments */
align-items: center; /* alignement vertical */
```

</details>

---

## 2.4 — Avatar rond

L'avatar doit :
- Avoir une taille fixe (ex: 140px × 140px)
- Être rond
- Ne pas être déformé si l'image n'est pas carrée
- Avoir une petite bordure

<details>
<summary>💡 Indice : image ronde</summary>

- `border-radius: 50%` → rend un élément rond
- `object-fit: cover` → l'image remplit le conteneur sans déformation
- `border` → ex: `2px solid #ddd`

</details>

<details>
<summary>🚀 Challenge</summary>

Ajoute une ombre portée (`box-shadow`) et un effet de zoom au survol (`:hover` + `transform: scale()`).

</details>

---

## 2.5 — Typographie du header

- Le nom (h1) : enlève la marge par défaut, taille plus grande
- Le rôle : couleur plus douce (gris)
- Les infos (meta) : petites marges, couleur grise

<details>
<summary>💡 Indice : enlever les marges par défaut</summary>

Les titres ont des marges par défaut. Pour les enlever :
```css
margin: 0;
```
ou juste `margin-top: 0;` si tu veux garder la marge du bas.

</details>

---

## 2.6 — Boutons

Crée un style `.btn` pour les boutons :
- Couleur de fond vive (ex: bleu `#2563eb`)
- Texte blanc
- Padding pour l'espace intérieur
- Coins arrondis
- Pas de soulignement (c'est un lien)
- Effet au survol (couleur plus foncée)

<details>
<summary>💡 Indice : transformer un lien en bouton</summary>

Par défaut, un `<a>` est en ligne. Pour lui donner des dimensions :
```css
display: inline-block;
```

Pour enlever le soulignement : `text-decoration: none;`

</details>

<details>
<summary>💡 Indice : effet au survol</summary>

```css
.btn:hover {
  background: /* couleur plus foncée */;
}
```

</details>

---

## 2.7 — Sections

Chaque section doit :
- Avoir un fond blanc
- Du padding
- Une marge en bas (pour l'espacement)
- Des coins légèrement arrondis

<details>
<summary>💡 Indice : coins arrondis</summary>

`border-radius: 8px` → coins arrondis de 8 pixels

</details>

---

## 2.8 — Badges de compétences

Les compétences doivent s'afficher en "pastilles" :
- Petites, arrondies
- Fond coloré clair (ex: `#e0e7ff`)
- Sur une même ligne (plusieurs par ligne)

<details>
<summary>💡 Indice : enlever les puces d'une liste</summary>

```css
list-style: none;
padding-left: 0;
```

</details>

<details>
<summary>💡 Indice : éléments côte à côte</summary>

`display: inline-block` permet aux `<li>` de se mettre sur la même ligne.

Pour des pastilles bien rondes : `border-radius: 9999px` (ou `border-radius: 50px`).

</details>

---

## 2.9 — Cartes de projets

Les 3 cartes doivent :
- S'afficher côte à côte (flexbox)
- Prendre chacune 1/3 de la largeur
- Avoir une bordure légère
- Avoir un effet au survol (bordure plus visible)

<details>
<summary>💡 Indice : 3 cartes en ligne</summary>

Sur le conteneur parent :
```css
display: flex;
gap: 20px;
```

Sur chaque carte :
```css
width: 33.33%;
/* ou */
flex: 1;
```

</details>

<details>
<summary>💡 Indice : effet hover sur bordure</summary>

```css
.card {
  border: 1px solid #e5e5e5;
}
.card:hover {
  border-color: #2563eb;
}
```

</details>

<details>
<summary>🚀 Challenge</summary>

- Ajoute une transition fluide sur le hover : `transition: border-color 0.2s;`
- Ajoute une ombre au survol avec `box-shadow`

</details>

---

## 2.10 — Tags

Les tags dans les cartes projet :
- Petits badges arrondis
- Fond différent des badges de compétences
- Taille de police plus petite

<details>
<summary>💡 Indice : réduire la taille du texte</summary>

`font-size: 0.85em` → 85% de la taille normale

</details>

---

## 2.11 — Timeline (parcours)

La liste du parcours doit :
- Avoir un léger retrait à gauche
- Espacer les lignes entre elles

<details>
<summary>💡 Indice : espacer les éléments de liste</summary>

```css
.timeline li {
  margin-bottom: 10px;
}
```

</details>

<details>
<summary>🚀 Challenge</summary>

Crée une vraie timeline avec une ligne verticale à gauche et des points pour chaque étape (utilise `::before` ou des bordures).

</details>

---

## 2.12 — Footer

Le footer doit :
- Être centré
- Avoir une couleur de texte douce
- Avoir du padding

<details>
<summary>💡 Indice : centrer le texte</summary>

`text-align: center;`

</details>

---

# 🎮 Partie 3 : Bonus (pour les plus rapides)

## 3.1 — Mode sombre

Ajoute un bouton qui permet de basculer entre mode clair et mode sombre.

> ⚠️ Cette partie nécessite du JavaScript.

<details>
<summary>💡 Indice : approche</summary>

1. Crée une classe CSS `.dark-mode` avec les couleurs inversées
2. En JS, ajoute un event listener sur le bouton
3. Au clic, utilise `document.body.classList.toggle('dark-mode')`

</details>

---

## 3.2 — Animations

Ajoute des animations subtiles :
- Les sections apparaissent en fondu au scroll
- Les cartes ont un léger rebond au survol

<details>
<summary>💡 Indice : animation au survol</summary>

```css
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
```

</details>

---

## 3.3 — Variables CSS

Refactorise ton CSS pour utiliser des variables (custom properties) pour :
- Les couleurs principales
- Les espacements récurrents

<details>
<summary>💡 Indice : variables CSS</summary>

```css
:root {
  --color-primary: #2563eb;
  --color-bg: #f5f5f5;
  --spacing: 20px;
}

.btn {
  background: var(--color-primary);
  padding: var(--spacing);
}
```

</details>

---

# 📤 Soumission

Une fois terminé, mets ton projet sur GitHub en suivant le guide `github-instructions.md`.

---

**Bon courage ! 🚀**
