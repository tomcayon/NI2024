(function(window, document, undefined) {
  
    window.onload = init;
  
    function init(){
        const mapdiv = document.getElementById('map');
        const boat = document.getElementById('boat');
        mapdiv.addEventListener("click", (event) => {
            // Récupère les coordonnées du clic
            const x = event.pageX;
            const y = event.pageY;

            const boatRect = boat.getBoundingClientRect();
            const boatX = boatRect.left + boatRect.width / 2;
            const boatY = boatRect.top + boatRect.height / 2;

            const deltaX = x - boatX;
            const deltaY = y - boatY;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            console.log(angle)

            // Déplace l'élément "boat" à ces coordonnées
            boat.style.transform = `translate(${x}px, ${y}px) rotate(${Math.round(angle)}deg)`;
            //boat.style.transform = `translate(${x}px, ${y}px) `;
        });
    }
  
  })(window, document, undefined);

  // let pointsDeVie = 75;  

  function healOcean() {
    if (pointsDeVie < 100){
        pointsDeVie += 25
    }
    changeBackground()
  }

  function destroyOcean() {
    if (pointsDeVie <= 100 && pointsDeVie >= 25){
        pointsDeVie -= 25
    }
    changeBackground()
  }

  function changeBackground() {
    const div = document.getElementById('map');
    
    // Ajouter la classe fade-out pour commencer le fondu
    div.classList.add('fade-out');
    
    // Après un délai pour permettre l'animation de fondu
    setTimeout(function() {
        switch(pointsDeVie){
        case 100:
            div.style.backgroundImage = "url('assets/Ocean.png')";
            break;
        case 75:
            div.style.backgroundImage = "url('assets/ocean_STEP1.png')";
            break;
        case 50:
            div.style.backgroundImage = "url('assets/ocean_STEP2.png')";
            break;
        case 25:
            div.style.backgroundImage = "url('assets/ocean_DARK.png')";

            break;
        }

      // Enlever la classe fade-out et ajouter la classe fade-in pour démarrer le fondu vers l'image suivante
      div.classList.remove('fade-out');
      div.classList.add('fade-in');
    }, 100); // Le délai correspond à la durée de l'animation de fondu
  }