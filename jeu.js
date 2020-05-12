const valider = document.querySelector('.valider');
const price = document.querySelector('.prix');
const start = document.querySelector('.start');
const result = document.querySelector('.reponse');
const estimations = document.getElementById('estimations');
const robot = Math.floor(Math.random() * 100) + 1;
var secondes = 30;

// afficher formulaire d'estimations 
function afficherFormEstimations() {
    estimations.style.visibility = 'visible';
    estimations.style.opacity = 1
}

// réglage du chrono
var chrono = setInterval(function () {
        if (secondes == 0) {
            // stopper le chrono à 0 
        clearInterval(chrono);
        result.innerHTML = 'Perdu! Retentez votre chance!';
        // masquer le formultaire estimations
        estimations.style.visibility = 'hidden';
        estimations.style.opacity = '0';
    } else {
        secondes--;
        document.querySelector('.chrono').innerHTML = secondes;
    }
}, 1000);

// la logique du jeu
function checkEsitmations() {

    var joueur = Number(price.value);

    if (joueur === robot) {
        result.innerHTML = ` Bravo! ${joueur} est le juste prix !! :-)`;
        estimations.style.fontSize = '50px';
        estimations.style.visibility = 'hidden';
        estimations.style.opacity = 0;
        result.style.color = 'yellow';
        // on appel la clearInterval pour réinitialiser le jeu 
        clearInterval(chrono);
    } else if (joueur < robot) {
        result.innerHTML = "C'est plus!!"
        result.style.color = 'blue'
    } else {
        result.innerHTML = "C'est moins!!"
        result.style.color = 'red'
    }
    // aprés chaque estimation on vide le champ
    price.value = "";
    // on se remet directement sur le champ de saisie 
    price.focus();
};


// Ecoute des événements
start.addEventListener('click', afficherFormEstimations);
valider.addEventListener('click', checkEsitmations);