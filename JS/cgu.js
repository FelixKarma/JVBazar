/*voir le texte sans que le header le cache*/
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
          scrollToTopBtn.addEventListener("click", function () {
            // Définition de la position de défilement à 0
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          });