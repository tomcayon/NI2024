(function(window, document, undefined) {
  
    window.onload = init;
  
    function init(){
        const mapdiv = document.getElementById('map');
        const boat = document.getElementById('boat');
        mapdiv.addEventListener("click", (event) => {
            // Récupère les coordonnées du clic
            const x = event.clientX;
            const y = event.clientY;

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

  