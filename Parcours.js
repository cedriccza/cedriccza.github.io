document.addEventListener("DOMContentLoaded", () => { 
    const titre = document.getElementById("titre");
    const text = titre.innerText;
    titre.innerHTML = ""; // On vide le titre pour insérer les spans
    
    // Liste des couleurs primaires
    const primaryColors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1" ]; // Rouge, Vert, Bleu, Rose

    function getPrimaryColor() {
        return primaryColors[Math.floor(Math.random() * primaryColors.length)]; // Sélection aléatoire
    }

    // On entoure chaque lettre dans un <span>
    text.split("").forEach(letter => {
        let span = document.createElement("span");  
        span.innerText = letter;
        titre.appendChild(span);
    });

    const spans = titre.querySelectorAll("span");

    function changeColors() {
        spans.forEach(span => {
            span.style.color = getPrimaryColor(); // Applique une couleur primaire
        });
    }

    setInterval(changeColors, 500); // Change les couleurs toutes les 500ms
});




$(function(){
    $().timelinr({
        orientation: 	'vertical',
        issuesSpeed: 	300,
        datesSpeed: 	100,
        arrowKeys: 		'true',
        startAt:		3
    })
});