// ===== VARIABLES DU JEU =====

// Le nombre secret que l'ordinateur a choisi (entre 0 et 100)
// TODO: Génère un nombre aléatoire entre 0 et 100
//
// Indices :
// - Math.random() donne un nombre décimal entre 0 et 1 (ex: 0.7342)
// - Si tu multiplies par 101, tu obtiens un nombre entre 0 et 100.99...
// - Math.floor() arrondit vers le bas (enlève les décimales)
// - Combine ces 3 éléments !
let secretNumber = _____;

// Le nombre de tentatives du joueur (commence à 0)
let attempts = _____;

// Pour savoir si le jeu est terminé (true = terminé, false = en cours)
let gameOver = _____;

// Affiche le nombre secret dans la console (pour tester)
console.log("🤫 Le nombre secret est :", secretNumber);


// ===== ÉLÉMENTS DU DOM =====

// TODO: Récupère les éléments HTML avec document.getElementById()
// Remplace les _____ par les IDs que tu as mis dans ton HTML

const guessInput = document.getElementById("_____");   // L'input où on tape le nombre
const guessBtn = document.getElementById("_____");     // Le bouton "Deviner"
const restartBtn = document.getElementById("_____");   // Le bouton "Rejouer"
const messageBox = document.getElementById("_____");   // La zone de message
const attemptCount = document.getElementById("_____"); // Le compteur de tentatives


// ===== FONCTION DE VÉRIFICATION =====

function checkGuess() {
  // Si le jeu est terminé, on ne fait rien
  if (gameOver) {
    return;
  }

  // TODO: Récupère la valeur de l'input et convertis-la en nombre
  // Indice: guessInput.value contient le texte tapé par l'utilisateur
  // Indice: parseInt() convertit du texte en nombre entier
  let playerGuess = parseInt(_____);

  // Vérifie si le joueur a bien entré un nombre
  if (isNaN(playerGuess)) {
    messageBox.textContent = "Entre un nombre valide !";
    return;
  }

  // On augmente le compteur de tentatives
  attempts = attempts + 1;
  attemptCount.textContent = attempts;

  // TODO: Compare playerGuess avec secretNumber et affiche le bon message
  //
  // Si playerGuess < secretNumber → le joueur doit deviner PLUS GRAND
  // Si playerGuess > secretNumber → le joueur doit deviner PLUS PETIT
  // Sinon → le joueur a GAGNÉ !

  if (playerGuess < secretNumber) {
    // Le nombre proposé est trop petit
    // TODO: Remplace _____ par le message à afficher (ex: "⬆️ Plus grand !")
    messageBox.textContent = "_____";
    messageBox.className = "message-box hint-higher";
  } 
  else if (playerGuess > secretNumber) {
    // Le nombre proposé est trop grand
    // TODO: Remplace _____ par le message à afficher (ex: "⬇️ Plus petit !")
    messageBox.textContent = "_____";
    messageBox.className = "message-box hint-lower";
  } 
  else {
    // Gagné !
    messageBox.textContent = "🎉 Bravo ! C'était bien " + secretNumber + " !";
    messageBox.className = "message-box win";
    
    // Le jeu est terminé
    gameOver = true;
    
    // On affiche le bouton rejouer
    restartBtn.classList.add("visible");
    
    // On désactive l'input et le bouton deviner
    guessInput.disabled = true;
    guessBtn.disabled = true;
  }
}


// ===== ÉVÉNEMENTS =====

// TODO: Quand on clique sur le bouton "Deviner", on appelle checkGuess()
// Remplace _____ par le nom de la fonction à appeler
guessBtn.addEventListener("click", _____);

// BONUS: Quand on appuie sur Entrée dans l'input, on appelle aussi checkGuess()
guessInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});


// ===== FONCTION REJOUER =====

function restartGame() {
  // TODO: Génère un nouveau nombre secret (comme à l'étape 3.1)
  secretNumber = _____;
  
  // TODO: Remet le compteur de tentatives à 0
  attempts = _____;
  attemptCount.textContent = attempts;  // On affiche la nouvelle valeur de attempts
  
  // TODO: Remet gameOver à false (le jeu n'est plus terminé)
  gameOver = _____;
  
  // Réinitialise l'affichage
  messageBox.textContent = "Fais ta première proposition !";
  messageBox.className = "message-box";
  
  // Réactive l'input et le bouton
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.value = "";
  guessInput.focus();
  
  // Cache le bouton rejouer
  restartBtn.classList.remove("visible");
  
  // Affiche le nouveau nombre secret dans la console (pour tester)
  console.log("🤫 Nouveau nombre secret :", secretNumber);
}

// TODO: Ajoute un événement click sur le bouton rejouer
// (même principe qu'à l'étape 3.4)
restartBtn.addEventListener("click", _____);
