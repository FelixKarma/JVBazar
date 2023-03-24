function toggleNightMode() {
    var body = document.querySelector('body');
    var modeToggle = document.querySelector('#night-mode-btn');
    var isNightModeOn = body.classList.toggle('night-mode');

    localStorage.setItem('isNightModeOn', isNightModeOn);

    if (isNightModeOn) {
        modeToggle.src = "../img/light.png";
        modeToggle.alt = "Désactiver le mode nuit";
    } else {
        modeToggle.src = "../img/ph_moon-thin.png";
        modeToggle.alt = "Activer le mode nuit";
    }
}

var isNightModeOn = localStorage.getItem('isNightModeOn');
if (isNightModeOn === 'true') {
    document.querySelector('body').classList.add('night-mode');
}