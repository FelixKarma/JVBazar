function toggleNightMode() {
    var body = document.querySelector('body');
    var modeToggle = document.querySelector('#night-mode-btn');
    
    body.classList.toggle('night-mode');
    
    if (body.classList.contains('night-mode')) {
        modeToggle.src = "../img/light.png";
        modeToggle.alt = "Désactiver le mode nuit";
    } else {
        modeToggle.src = "../img/ph_moon-thin.png";
        modeToggle.alt = "Activer le mode nuit";
    }
}