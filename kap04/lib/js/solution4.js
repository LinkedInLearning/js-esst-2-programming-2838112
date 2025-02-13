"use strict";
window.onload=function() {
  // Array, um die IDs der Bilder zu speichern, bei denen der Mauszeiger länger als 1 Sekunde war
  let hoveredImages = [];

  // Funktion, um das Bild per AJAX zu senden
  function sendImageIds(imageIds) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'empfang_server.php', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      
      // JSON mit den Bild-IDs an den Server senden
      xhr.send(JSON.stringify({ imageIds: imageIds }));

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              document.getElementById("info").innerHTML='Daten gesendet: ' + new Date() + "<br />" + 
              xhr.responseText;
          }
      };
  }

  // Funktion, die prüft, ob der Mauszeiger länger als 1 Sekunde über einem Bild war
  function handleMouseEnter(event) {
      const imageId = event.target.id;
      let timeout;

      // Setze einen Timeout für 1 Sekunde, wenn die Maus auf dem Bild bleibt
      timeout = setTimeout(() => {
          if (!hoveredImages.includes(imageId)) {
              hoveredImages.push(imageId);            
          }
      }, 1000); // 1000ms = 1 Sekunde

      // Wenn der Mauszeiger das Bild verlässt, den Timeout abbrechen
      event.target.addEventListener('mouseleave', () => {
          clearTimeout(timeout);
      });
  }

  // Event-Listener für alle Bilder auf der Seite
  const images = document.querySelectorAll('img');
  images.forEach(image => {
      image.addEventListener('mouseenter', handleMouseEnter);
  });

    // Alle 5 Sekunden im Hintergrund Daten wegschicken

  function sendeImHintergrund(){  
      if (hoveredImages.length > 0) {
          sendImageIds(hoveredImages);
      }
      setTimeout(sendeImHintergrund,5000);
  };
  sendeImHintergrund();
};