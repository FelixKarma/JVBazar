// Récupérer le Pac-Man et son image
var pacman = document.getElementById('pacman');
var pacmanImage = document.getElementById('pacman');
// Définir la vitesse de déplacement
var speed = 5;

// Définir la direction de départ
var direction = 'right';

// Boucle de jeu
setInterval(function() {
	// Récupérer la position actuelle du Pac-Man
	var x = pacman.offsetLeft;
	var y = pacman.offsetTop;

	// Changer la direction si le Pac-Man atteint un bord de l'écran
	if (x >= window.innerWidth - pacman.offsetWidth) {
		direction = 'left';
		pacman.style.transform = 'rotate(180deg)';
		pacmanImage.style.transform = 'scaleX(-1)';
	} else if (x <= 0) {
		direction = 'right';
		pacman.style.transform = 'rotate(0deg)';
		
	}

	// Déplacer le Pac-Man dans la direction appropriée
	if (direction == 'right') {
		pacman.style.left = (x + speed) + 'px';
	} else {
		pacman.style.left = (x - speed) + 'px';
	}
}, 50);