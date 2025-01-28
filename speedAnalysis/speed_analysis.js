let testText = "Le rapide renard brun saute par-dessus le chien paresseux.";
let startTime, endTime;
function startTest() {
// Définir le texte de test
document.getElementById("inputText").value = testText;

// Réinitialiser les résultats et le chronomètre
document.getElementById("output").innerHTML = "";
startTime = new Date().getTime();

// Changer le texte et la fonctionnalité du bouton
var button = document.getElementById("btn");
button.innerHTML = "Fin du test";
button.onclick = endTest;
        }
         function endTest() {
            endTime = new Date().getTime();

            // Désactiver la saisie utilisateur
            document.getElementById("userInput").readOnly = true;

            // Calculer le temps écoulé et les mots par minute (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // en secondes
            var userTypedText = document.getElementById("userInput").value;

            // Diviser le texte en utilisant une regex pour compter les mots correctement
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;

            var wpm = 0; // Valeur par défaut

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // Afficher les résultats
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Résultats du Test de Dactylographie :</h2>" +
                "<p>Mots Taper : " + typedWords + "</p>" +
                "<p>Temps Écoulé : " + timeElapsed.toFixed(2) + " secondes</p>" +
                "<p>Mots Par Minute (WPM) : " + wpm + "</p>";

            // Réinitialiser le bouton
            var button = document.getElementById("btn");
            button.innerHTML = "Commencer le Test";
            button.onclick = startTest;
        }