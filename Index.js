/*
 *****   TOGGLE PLAY TO PAUSE ***********
 */
var element = document.getElementById("play");

// Fonction toggle
function toggleElement() {
  // Vérifier la classe actuelle
  if (element.classList.contains("fa-play")) {
    // Si la classe fa-play est présente, la remplacer par fa-pause
    element.classList.remove("fa-play");
    element.classList.add("fa-pause");
  } else {
    // Sinon, la classe fa-pause est présente, la remplacer par fa-play
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  }
}

// Ajouter un gestionnaire d'événements pour le clic sur l'élément
element.addEventListener("click", toggleElement);
