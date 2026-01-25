# 🎯 Projet : Le jeu "Plus ou Moins"

![Aperçu du jeu](assets/screenshot-game.png)

Bienvenue dans ton premier projet JavaScript ! 🎉

Tu vas créer un jeu classique : **le jeu du "Plus ou Moins"**. Le principe est simple :
- L'ordinateur choisit secrètement un nombre entre **0 et 100**
- Tu dois deviner ce nombre
- À chaque tentative, l'ordinateur te donne un indice : **"Plus grand !"** ou **"Plus petit !"**
- Tu gagnes quand tu trouves le bon nombre !

---

## 📁 Structure du projet

```
plus-ou-moins/
├── index.html    ← Structure de la page
├── style.css     ← Design (fourni)
└── script.js     ← Logique du jeu
```

📁 **Récupère les fichiers de départ** dans le dossier [`starter-files/`](starter-files/) et copie-les dans ton dossier projet.

> Le CSS est déjà prêt, tu n'as pas à le modifier pour le niveau 1.

---

## 🇬🇧 Vocabulaire anglais

Les termes anglais que tu vas rencontrer dans cet exercice :

### Variables et types

| Anglais | Prononciation | Français |
|---------|---------------|----------|
| `let` / `const` | "lètt" / "konsst" | déclarer une variable |
| `number` | "neum-beur" | nombre |
| `true` / `false` | "trou" / "folss" | vrai / faux |
| `null` | "neul" | nul, vide |

### Noms de variables du jeu

| Anglais | Prononciation | Français |
|---------|---------------|----------|
| `secret` | "si-krètt" | secret |
| `guess` | "guèss" | supposition, estimation |
| `attempts` | "a-tèmpts" | tentatives |
| `count` | "kaount" | compteur |
| `input` | "inn-poutt" | champ de saisie |
| `button` / `btn` | "beut-eun" | bouton |
| `message` | "mè-sidj" | message |
| `game` | "guéïm" | jeu |
| `over` | "o-veur" | terminé |
| `restart` | "ri-start" | recommencer |

### Fonctions et méthodes

| Anglais | Prononciation | Français |
|---------|---------------|----------|
| `function` | "feunk-cheun" | fonction |
| `return` | "ri-teurn" | retourner |
| `check` | "tchèk" | vérifier |
| `click` | "klik" | clic |
| `event` | "i-vènnt" | événement |
| `listener` | "liss-neu-eur" | écouteur |
| `add` | "ad" | ajouter |
| `remove` | "ri-mouv" | enlever |
| `get` | "guètt" | obtenir |

### Propriétés et valeurs

| Anglais | Prononciation | Français |
|---------|---------------|----------|
| `value` | "val-iou" | valeur |
| `textContent` | "tèkst konn-tènnt" | contenu texte |
| `disabled` | "diss-éï-beuld" | désactivé |
| `visible` | "vi-zi-beul" | visible |
| `classList` | "klass lisst" | liste de classes |
| `random` | "rann-deum" | aléatoire |
| `floor` | "flor" | arrondir vers le bas |
| `higher` | "haï-eur" | plus haut/grand |
| `lower` | "lo-eur" | plus bas/petit |

---

# 📝 Niveau 1 : Le jeu de base

## Partie 1 : HTML

### 1.1 — Lier le CSS

Dans le `<head>` de ton fichier HTML, lie le fichier `style.css`.

<details>
<summary>💡 Indice : comment lier un fichier CSS ?</summary>

On utilise la balise `<link>` avec l'attribut `rel="stylesheet"` :

```html
<link rel="stylesheet" href="nom-du-fichier.css">
```

</details>

---

### 1.2 — Zone de message

Crée une zone qui affichera les messages du jeu ("Plus grand !", "Plus petit !", "Gagné !").

Elle doit avoir :
- La classe `message-box` (pour le style)
- L'id `message` (pour la récupérer en JS)
- Un texte par défaut : "Fais ta première proposition !"

<details>
<summary>💡 Indice : structure d'une div</summary>

```html
<div class="ma-classe" id="mon-id">Mon texte</div>
```

</details>

---

### 1.3 — Input de saisie

Crée un champ de saisie pour que le joueur entre un nombre.

Il doit avoir :
- Le type `number`
- L'id `guessInput`
- La classe `guess-input`
- Les attributs `min="0"` et `max="100"`
- Un placeholder `"0 - 100"`

<details>
<summary>💡 Indice : input de type number</summary>

```html
<input type="number" id="..." class="..." min="..." max="..." placeholder="...">
```

Les attributs `min` et `max` limitent les valeurs possibles.

</details>

---

### 1.4 — Bouton "Deviner"

Crée un bouton pour soumettre la proposition du joueur.

Il doit avoir :
- L'id `guessBtn`
- Les classes `btn btn-primary`
- Le texte "Deviner"

<details>
<summary>💡 Indice : créer un bouton</summary>

```html
<button id="..." class="...">Texte du bouton</button>
```

</details>

---

### 1.5 — Compteur de tentatives

Crée un paragraphe qui affiche "Tentatives : X" où X est le nombre d'essais.

Structure :
- Un `<p>` avec la classe `attempts`
- Le texte "Tentatives : "
- Un `<span>` avec l'id `attemptCount` contenant "0"

<details>
<summary>💡 Indice : span dans un paragraphe</summary>

Le `<span>` permet d'isoler une partie du texte pour la manipuler en JS :

```html
<p>Texte : <span id="mon-id">valeur</span></p>
```

</details>

---

### 1.6 — Bouton "Rejouer"

Crée un bouton pour relancer une nouvelle partie (il sera caché par défaut grâce au CSS).

Il doit avoir :
- L'id `restartBtn`
- Les classes `btn btn-success btn-restart`
- Le texte "🔄 Rejouer"

---

### 1.7 — Lier le JavaScript

À la fin du `<body>`, lie ton fichier `script.js`.

<details>
<summary>💡 Indice : lier un fichier JS</summary>

```html
<script src="nom-du-fichier.js"></script>
```

⚠️ Place toujours le `<script>` **à la fin** du `<body>`, juste avant `</body>`.

</details>

---

### ✅ Vérifie ton HTML !

Avant de passer au JavaScript, ouvre `index.html` dans ton navigateur :
- Le design doit s'afficher (fond sombre, carte centrée)
- Tous les éléments doivent être visibles

> ⚠️ Si le design ne s'applique pas, vérifie le lien vers le CSS.

---

## Partie 2 : JavaScript

### 2.1 — Variables du jeu

Crée 3 variables pour gérer l'état du jeu :

| Variable | Description | Valeur initiale |
|----------|-------------|-----------------|
| `secretNumber` | Le nombre à deviner | Un nombre aléatoire entre 0 et 100 |
| `attempts` | Compteur de tentatives | `0` |
| `gameOver` | État du jeu | `false` |

<details>
<summary>💡 Indice : générer un nombre aléatoire</summary>

Pour un nombre entre 0 et 100 :

1. `Math.random()` → nombre décimal entre 0 et 1 (ex: 0.7342)
2. Multiplie par 101 → nombre entre 0 et 100.99...
3. `Math.floor()` → arrondit vers le bas

Combine ces 3 éléments en une expression !

</details>

<details>
<summary>💡 Indice : syntaxe</summary>

```javascript
let secretNumber = Math.floor(Math.random() * 101);
let attempts = 0;
let gameOver = false;
```

</details>

**Teste !** Ajoute `console.log("🤫 Le nombre secret est :", secretNumber);` et ouvre la console (F12) pour vérifier.

![Console avec le nombre secret](assets/screenshot-console.png)

---

### 2.2 — Récupérer les éléments HTML

Récupère les éléments du DOM avec `document.getElementById()` :

| Variable | ID à récupérer |
|----------|----------------|
| `guessInput` | L'input de saisie |
| `guessBtn` | Le bouton "Deviner" |
| `restartBtn` | Le bouton "Rejouer" |
| `messageBox` | La zone de message |
| `attemptCount` | Le span du compteur |

<details>
<summary>💡 Indice : récupérer un élément par son ID</summary>

```javascript
const monElement = document.getElementById("idDeLElement");
```

Utilise les IDs que tu as définis dans ton HTML.

</details>

**Teste !** Ajoute `console.log(guessInput);` — si tu vois `null`, c'est que l'ID est incorrect.

---

### 2.3 — Fonction de vérification

Crée une fonction `checkGuess()` qui :

1. **Récupère la valeur** de l'input
2. **Vérifie** si c'est un nombre valide
3. **Incrémente** le compteur de tentatives
4. **Compare** avec le nombre secret et affiche le bon message

<details>
<summary>💡 Indice : récupérer la valeur d'un input</summary>

```javascript
let playerGuess = parseInt(guessInput.value);
```

- `guessInput.value` → le texte tapé par l'utilisateur
- `parseInt()` → convertit le texte en nombre entier

</details>

<details>
<summary>💡 Indice : structure de la fonction</summary>

```javascript
function checkGuess() {
  // Si le jeu est terminé, on sort
  if (gameOver) return;

  // Récupérer la valeur
  let playerGuess = parseInt(guessInput.value);

  // Vérifier si c'est un nombre
  if (isNaN(playerGuess)) {
    messageBox.textContent = "Entre un nombre valide !";
    return;
  }

  // Incrémenter le compteur
  attempts = attempts + 1;
  attemptCount.textContent = attempts;

  // Comparer et afficher le message
  if (playerGuess < secretNumber) {
    messageBox.textContent = "⬆️ Plus grand !";
    messageBox.className = "message-box hint-higher";
  } 
  else if (playerGuess > secretNumber) {
    messageBox.textContent = "⬇️ Plus petit !";
    messageBox.className = "message-box hint-lower";
  } 
  else {
    // Gagné !
    messageBox.textContent = "🎉 Bravo ! C'était " + secretNumber + " !";
    messageBox.className = "message-box win";
    gameOver = true;
    restartBtn.classList.add("visible");
    guessInput.disabled = true;
    guessBtn.disabled = true;
  }
}
```

</details>

---

### 2.4 — Ajouter l'événement "click"

Fais en sorte que `checkGuess()` soit appelée quand on clique sur le bouton "Deviner".

<details>
<summary>💡 Indice : addEventListener</summary>

```javascript
guessBtn.addEventListener("click", checkGuess);
```

⚠️ Pas de parenthèses après `checkGuess` ! On passe la fonction, on ne l'appelle pas.

</details>

**Teste !** Tu devrais pouvoir jouer. Vérifie :
- Le message change selon ta proposition
- Le compteur augmente
- Quand tu trouves, le message de victoire s'affiche

---

### 2.5 — Fonction "Rejouer"

Crée une fonction `restartGame()` qui relance une nouvelle partie :
- Génère un nouveau nombre secret
- Remet `attempts` à 0
- Remet `gameOver` à false
- Réinitialise l'affichage

<details>
<summary>💡 Indice : structure de restartGame</summary>

```javascript
function restartGame() {
  // Nouveau nombre secret
  secretNumber = Math.floor(Math.random() * 101);
  
  // Réinitialiser les variables
  attempts = 0;
  attemptCount.textContent = attempts;
  gameOver = false;
  
  // Réinitialiser l'affichage
  messageBox.textContent = "Fais ta première proposition !";
  messageBox.className = "message-box";
  
  // Réactiver les contrôles
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.value = "";
  guessInput.focus();
  
  // Cacher le bouton rejouer
  restartBtn.classList.remove("visible");
  
  console.log("🤫 Nouveau nombre secret :", secretNumber);
}
```

</details>

N'oublie pas d'ajouter l'événement click sur le bouton "Rejouer" !

---

### ✅ Checklist Niveau 1

Avant de passer au niveau 2, vérifie que tout fonctionne :

- [ ] La page s'affiche avec le design (fond sombre, carte centrée)
- [ ] Un nombre aléatoire est généré (visible dans la console)
- [ ] Je peux entrer un nombre et cliquer sur "Deviner"
- [ ] Le message "Plus grand !" ou "Plus petit !" s'affiche avec les bonnes couleurs
- [ ] Le compteur de tentatives augmente
- [ ] Quand je trouve, le message de victoire apparaît
- [ ] Le bouton "Rejouer" apparaît quand je gagne
- [ ] Le bouton "Rejouer" relance une nouvelle partie

🎉 **Félicitations !** Tu as créé ton premier jeu en JavaScript !

---

---

# 🚀 Niveau 2 : Améliorations (bonus)

Tu as terminé le niveau 1 ? Voici des idées pour aller plus loin !

⚠️ **Attention** : À partir d'ici, tu n'auras plus d'instructions détaillées. C'est à toi de chercher !

---

## Idées d'améliorations

### ⭐ Facile

- **Afficher l'historique** : Montre la liste de toutes les propositions
- **Personnaliser les messages** : Change les messages ou ajoute des emojis
- **Utiliser les animations CSS** : Ajoute la classe `shake` ou `pulse` à un élément

<details>
<summary>💡 Indice : ajouter une classe CSS en JS</summary>

```javascript
element.classList.add("shake");
```

</details>

---

### ⭐⭐ Moyen

- **Slider visuel** : Remplace l'input par un `<input type="range">`
- **Limite de tentatives** : 10 essais max, sinon c'est perdu !
- **Indicateur chaud/froid** : Change le fond selon la proximité

<details>
<summary>💡 Indice : input type range</summary>

```html
<input type="range" id="slider" min="0" max="100" value="50">
```

Pour récupérer la valeur : `slider.value`

Pour afficher la valeur en temps réel, écoute l'événement `input`.

</details>

<details>
<summary>💡 Indice : limite de tentatives</summary>

1. Crée une variable `maxAttempts = 10`
2. Dans `checkGuess()`, vérifie si `attempts >= maxAttempts`
3. Si oui, affiche un message de défaite et termine le jeu

</details>

---

### ⭐⭐⭐ Difficile

- **Choix de difficulté** : Facile (0-50), Normal (0-100), Difficile (0-500)
- **Meilleur score** : Enregistre le record avec `localStorage`
- **Chronomètre** : Affiche le temps mis pour trouver

<details>
<summary>💡 Indice : localStorage</summary>

```javascript
// Sauvegarder
localStorage.setItem("bestScore", 5);

// Récupérer
let best = localStorage.getItem("bestScore");
```

</details>

<details>
<summary>💡 Indice : chronomètre</summary>

```javascript
// Au début du jeu
let startTime = Date.now();

// À la fin du jeu
let endTime = Date.now();
let seconds = Math.floor((endTime - startTime) / 1000);
```

</details>

---

### 🎨 Personnalisation du design

- Change les couleurs (modifie les variables CSS dans `:root`)
- Ajoute des animations personnalisées
- Crée ton propre thème (clair, néon, rétro...)

---

## Conseils pour le niveau 2

1. **Cherche sur internet** : "JavaScript input range", "JavaScript localStorage"...
2. **Utilise la console** : `console.log()` est ton meilleur ami !
3. **Procède par petites étapes** : Une amélioration à la fois
4. **N'aie pas peur de casser ton code** : Ctrl+Z existe !
5. **Demande de l'aide** si tu bloques plus de 15 minutes

---

## 📚 Ressources utiles

- [MDN - Math.random()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [MDN - addEventListener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- [MDN - getElementById](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById)
- [MDN - Input type range](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/range)
- [MDN - localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

---

**Bon courage et amuse-toi bien ! 🎮**
