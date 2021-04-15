"use strict";

/**
 * Reaktion mit einer anonymen Funktionsreferenz auf onmousemove beim Bild
 */
document.getElementById("bild").onmousemove = function(e) {
    document.getElementById("info").innerHTML = e.clientX + "," + e.clientY;
};
/**
 * Reaktion mit einer anonymen Funktionsreferenz auf onmouseout beim Bild
 */
document.getElementById("bild").onmouseout = function() {
    document.getElementById("info").innerHTML = "";
};