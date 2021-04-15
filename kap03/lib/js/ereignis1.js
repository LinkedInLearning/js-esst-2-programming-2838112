"use strict";
/**
 * Funktion zur Anzeige einer Zufallszahl
 */
function reak1() {
    document.getElementById("info").innerHTML = Math.random();
}
/**
 * Reaktion mit einer benannten Funktionsreferenz
 */
document.getElementById("btn").onclick = reak1;
/**
 * Reaktion mit einer anonymen Funktionsreferenz auf onmouseover beim Bild
 */
document.getElementById("bild").onmouseover = function() {
    document.getElementById("info").innerHTML = new Date().getUTCMilliseconds();
};
/**
 * Reaktion mit einer anonymen Funktionsreferenz auf onmouseout beim Bild
 */
document.getElementById("bild").onmouseout = function() {
    document.getElementById("info").innerHTML = "";
};