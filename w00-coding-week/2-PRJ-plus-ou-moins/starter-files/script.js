// ===== VARIABLES DU JEU =====

// TODO: Crée les 3 variables du jeu
// - secretNumber : nombre aléatoire entre 0 et 100
// - attempts : compteur de tentatives (commence à 0)
// - gameOver : état du jeu (false au départ)



// Affiche le nombre secret dans la console (pour tester)
console.log("🤫 Le nombre secret est :", secretNumber);


// ===== ÉLÉMENTS DU DOM =====

// TODO: Récupère les éléments HTML avec document.getElementById()
// - guessInput : l'input de saisie
// - guessBtn : le bouton "Deviner"
// - restartBtn : le bouton "Rejouer"
// - messageBox : la zone de message
// - attemptCount : le span du compteur



// ===== FONCTION DE VÉRIFICATION =====

// TODO: Crée la fonction checkGuess()
// Elle doit :
// 1. Récupérer la valeur de l'input
// 2. Vérifier si c'est un nombre valide
// 3. Incrémenter le compteur
// 4. Comparer avec secretNumber et afficher le bon message



// ===== ÉVÉNEMENTS =====

// TODO: Ajoute un événement click sur le bouton "Deviner"
// qui appelle la fonction checkGuess


// Bonus: Valider avec la touche Entrée
guessInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});


// ===== FONCTION REJOUER =====

// TODO: Crée la fonction restartGame()
// Elle doit :
// 1. Générer un nouveau nombre secret
// 2. Remettre attempts à 0
// 3. Remettre gameOver à false
// 4. Réinitialiser l'affichage



// TODO: Ajoute un événement click sur le bouton "Rejouer"
// qui appelle la fonction restartGame
