"use strict";
window.onload=function() {

  // Auslösen des Events beim Klick auf den Registierungsbutton
  // In der Reaktionsmethode Auslösen des benutzerdefinierten Events
  let registrationButton = document.getElementById('registerButton');
  registrationButton.addEventListener('click', () => {
    // Erstellen eines benutzerdefinierten Events mit Namen registrationSuccess
    // Anlegen einer Eigenschaft detail mit den Eingeschaften message, username und regtime
    // message hat als Wert einen Vorgabetext
    // username ist die Eingabe in der Webseite
    // regtime enthält das aktuelle Systemdatum beim Auslösen des Events

    let registrationSuccessEvent = new CustomEvent('registrationSuccess', {
        detail: { 
          message: 'Registrierung erfolgreich!',
          username: document.getElementById("user").value,
          regtime: new Date()
        }
      });
    // Auslösen des benutzerdefinierten Events  
    document.dispatchEvent(registrationSuccessEvent);
  });
  
  // Reagieren auf das benutzerdefinierte Event
  // Ausgabe der benutzerdefinierten Werte über die detail-Eigenschaft des Events
  // und deren Untereigenschaften
  document.addEventListener('registrationSuccess', (event) => {
    
    document.getElementById("info").innerHTML=
    event.detail.message + '<br />Zeitpunkt der Registierung:<br />' + event.detail.regtime +
     '<br/>Willkommen, ' + event.detail.username + '!';
  });
};