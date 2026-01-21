
## TP 4h — Page de profil (débutants) — Version avec TODO

### But
Tu dois construire une page “profil” en HTML/CSS.  
Tu vas avancer étape par étape en complétant des **TODO**.

**Fichiers :**
- `index.html`
- `style.css`
- `assets/avatar.jpg` (ou png)

**Règles :**
- Pas de framework, pas de JS
- Pas de responsive.
- Seulement `:hover`.

---

# 1) HTML — Squelette à compléter (à copier dans `index.html`)

Copie-colle, puis remplis les TODO.

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><!-- TODO: mets un titre de page, ex: "Profil - Prénom Nom" --></title>

  <!-- TODO: relie ton fichier CSS -->
  <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="container">

      <!-- TODO: ajoute une image d’avatar dans assets/ (avec alt) -->
      <!-- Exemple:
      <img class="avatar" src="assets/avatar.jpg" alt="Photo de profil">
      -->

      <div class="header-text">
        <h1 class="name"><!-- TODO: mets ton prénom + nom --></h1>
        <p class="role"><!-- TODO: mets ton rôle, ex: "Développeur Web (débutant)" --></p>

        <p class="meta"><!-- TODO: mets ta ville, ex: "📍 Lille, FR" --></p>

        <!-- TODO: mets ton email -->
        <!-- Exemple: <p class="meta">✉️ prenom.nom@email.com</p> -->

        <!-- TODO: bouton "Contacter" avec un mailto -->
        <!-- Exemple: <a class="btn" href="mailto:prenom.nom@email.com">Contacter</a> -->
      </div>

    </div>
  </header>

  <!-- MAIN -->
  <main class="main">
    <div class="container">

      <!-- À PROPOS -->
      <section class="section" id="about">
        <h2>À propos</h2>
        <p>
          <!-- TODO: écris 5 à 8 lignes de présentation -->
        </p>
      </section>

      <!-- COMPÉTENCES -->
      <section class="section" id="skills">
        <h2>Compétences</h2>

        <ul class="skills">
          <!-- TODO: ajoute 8 à 12 compétences (li.badge) -->
          <!-- Exemple:
          <li class="badge">HTML</li>
          -->
        </ul>
      </section>

      <!-- PROJETS -->
      <section class="section" id="projects">
        <h2>Projets</h2>

        <div class="projects">
          <!-- TODO: crée 3 cartes projet (article.card) -->

          <!-- Carte 1 -->
          <article class="card">
            <h3><!-- TODO: titre du projet 1 --></h3>
            <p><!-- TODO: description (2-3 lignes) --></p>

            <p class="tags">
              <!-- TODO: 2 tags (span.tag) -->
              <!-- Exemple: <span class="tag">HTML</span> -->
            </p>

            <!-- TODO: lien "Voir" (a.btn.small) -->
            <!-- Exemple: <a class="btn small" href="#" target="_blank">Voir</a> -->
          </article>

          <!-- Carte 2 -->
          <article class="card">
            <h3><!-- TODO --></h3>
            <p><!-- TODO --></p>
            <p class="tags">
              <!-- TODO -->
            </p>
            <!-- TODO -->
          </article>

          <!-- Carte 3 -->
          <article class="card">
            <h3><!-- TODO --></h3>
            <p><!-- TODO --></p>
            <p class="tags">
              <!-- TODO -->
            </p>
            <!-- TODO -->
          </article>

        </div>
      </section>

      <!-- PARCOURS -->
      <section class="section" id="experience">
        <h2>Parcours</h2>

        <ul class="timeline">
          <!-- TODO: ajoute 3 lignes (li) avec une année en gras -->
          <!-- Exemple: <li><strong>2026</strong> — Formation DWWM</li> -->
        </ul>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>
        <!-- TODO: ajoute 2 liens (GitHub, LinkedIn) ou du texte simple -->
      </p>
      <p>© <!-- TODO: année --> </p>
    </div>
  </footer>

</body>
</html>
```

---

# 2) CSS — Base à compléter (à copier dans `style.css`)

Copie-colle, puis remplis les TODO.

```css
/* =========================
   BASE (corps de page)
   ========================= */

body {
  font-family: Arial, sans-serif;

  /* TODO: choisis une couleur de fond claire */
  /* background: ...; */

  /* TODO: choisis une couleur de texte */
  /* color: ...; */
}

.container {
  /* TODO: fixe une largeur (ex: 900px) */
  /* width: ...; */

  /* TODO: centre le container */
  /* margin-left: auto;
     margin-right: auto; */
}

/* =========================
   HEADER
   ========================= */

.header {
  /* TODO: fond blanc + padding vertical */
  /* background: ...;
     padding-top: ...;
     padding-bottom: ...; */
}

/* TODO: placer avatar à gauche et texte à droite
   Indice: display: flex; gap: ...; align-items: center; */
.header .container {
  /* display: flex; */
  /* gap: ...; */
  /* align-items: ...; */
}

.avatar {
  /* TODO: taille carrée (ex: 140px) */
  /* width: ...;
     height: ...; */

  /* TODO: rendre l’image ronde */
  /* border-radius: ...; */

  /* TODO: éviter la déformation */
  /* object-fit: ...; */

  /* TODO: ajouter une bordure légère */
  /* border: ...; */
}

.name {
  /* TODO: enlever la marge du h1 et augmenter la taille */
  /* margin: 0; */
  /* font-size: ...; */
}

.role {
  /* TODO: régler les marges + couleur plus douce */
  /* margin-top: ...; */
  /* margin-bottom: ...; */
  /* color: ...; */
}

.meta {
  /* TODO: petites marges + couleur */
  /* margin: ...; */
  /* color: ...; */
}

/* =========================
   MAIN + SECTIONS
   ========================= */

.main {
  /* TODO: padding vertical */
  /* padding-top: ...;
     padding-bottom: ...; */
}

.section {
  /* TODO: fond blanc + padding + marge basse + coins arrondis */
  /* background: ...; */
  /* padding: ...; */
  /* margin-bottom: ...; */
  /* border-radius: ...; */
}

.section h2 {
  /* TODO: enlever la marge du haut */
  /* margin-top: 0; */
}

/* =========================
   BOUTONS + HOVER
   ========================= */

.btn {
  /* TODO: faire ressembler un lien à un bouton */
  /* display: inline-block; */
  /* background: ...; */
  /* color: ...; */
  /* text-decoration: none; */
  /* padding: ...; */
  /* border-radius: ...; */
  /* margin-top: ...; */
}

.btn:hover {
  /* TODO: changer légèrement la couleur au survol */
  /* background: ...; */
}

.btn.small {
  /* TODO: bouton plus petit pour les cartes projet */
  /* padding: ...; */
  /* margin-top: ...; */
}

/* =========================
   COMPÉTENCES (BADGES)
   ========================= */

.skills {
  /* TODO: enlever les puces + enlever padding gauche */
  /* list-style: none; */
  /* padding-left: 0; */
}

.badge {
  /* TODO: badge en pastille */
  /* display: inline-block; */
  /* background: ...; */
  /* padding: ...; */
  /* border-radius: 999px; */
  /* margin-right: ...; */
  /* margin-bottom: ...; */
}

/* =========================
   PROJETS (3 CARTES)
   ========================= */

/* Explication minimale:
   display: flex; met les enfants d’un bloc sur une même ligne. */
.projects {
  /* TODO: aligner les cartes sur une ligne */
  /* display: flex; */
  /* gap: ...; */
}

.card {
  /* TODO: style carte */
  /* background: ...; */
  /* border: ...; */
  /* border-radius: ...; */
  /* padding: ...; */

  /* TODO: chaque carte prend 1/3 de la largeur */
  /* width: 33.33%; */
}

.card:hover {
  /* TODO: bordure plus visible au survol */
  /* border-color: ...; */
}

.tags {
  /* TODO: marge autour des tags */
  /* margin: ...; */
}

.tag {
  /* TODO: petit tag arrondi */
  /* display: inline-block; */
  /* background: ...; */
  /* padding: ...; */
  /* border-radius: 999px; */
  /* margin-right: ...; */
  /* font-size: ...; */
}

/* =========================
   PARCOURS
   ========================= */

.timeline {
  /* TODO: régler marges + indentation */
  /* margin: 0; */
  /* padding-left: ...; */
}

.timeline li {
  /* TODO: espacer les lignes */
  /* margin-bottom: ...; */
}

/* =========================
   FOOTER
   ========================= */

.footer {
  /* TODO: centrer + couleur douce + padding */
  /* text-align: center; */
  /* color: ...; */
  /* padding: ...; */
}
```

# 3) JS - Version simple
Ajoutez un bouton, et quand on clique dessus, ça change les couleurs de votre page pour que ça passe en mode nuit