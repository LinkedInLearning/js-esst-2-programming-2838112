"use strict";
/**
 * Rekursive Funktion zur Berechung der Fakultät
 * @return Zwischenwert
 * @param {Object} n
 */
function fak(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fak(n - 1);
    }
}

/**
 * Rekursive Funktion zur Animation
 * @param {*} i 
 */
function ani(i) {
    document.getElementById("bild").style.opacity = 1 - i / 100;

    if (i < 100) {
        setTimeout(function() {
            ani(++i);
        }, 2);
    }
}
document.getElementById("bild").onclick = function() {
    document.getElementById("bild").style.opacity = 1;
    ani(1);
}
document.getElementById("btn").onclick = function() {
    document.getElementById("info").innerHTML = fak(5);
}