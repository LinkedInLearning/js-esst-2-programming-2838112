"use strict";
/**
 * Funktion zur Anzeige der Eigenschaften eines Eventobjekts
 */
function reak1(e) {
    document.getElementById("info").innerHTML = "";
    for (var i in e) {
        document.getElementById("info").innerHTML += i + ": " + e[i] + "<br />";
    }

}
/**
 * Reaktion mit einer benannten Funktionsreferenz auf ein Klickerevent beim Button
 */
document.getElementById("bild").onclick = reak1;
/**
 * Reaktion mit einer benannten Funktionsreferenz auf ein Klickerevent beim Bild
 */
document.getElementById("btn").onclick = reak1;
/**
 * Reaktion mit einer anonymen Funktionsreferenz auf onmouseover beim Bild
 */
document.getElementById("bild").onmouseover = function(e) {
    document.getElementById("info").innerHTML = e.clientX + "," + e.clientY;
};