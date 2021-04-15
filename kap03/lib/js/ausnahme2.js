// Kein "use strict";

window.onload = function() {
    document.getElementById("btn1").onclick = function() {
        try {
            document.getElementById("info").innerHTML = eval("a * b");
        } catch (e) {
            document.getElementById("info").innerHTML =
                "Information in dem Ausnahmeobjekt: " + e.toString();
        }
    };
    document.getElementById("btn2").onclick = function() {
        var zufall = Math.random();
        document.getElementById("info").innerHTML = zufall + "<hr />";
        if (zufall < 0.5) {
            // Deklaration von a und b - ausdrücklich ohne var (!!!)
            a = 21;
            b = 2;
        }
        try {
            document.getElementById("info").innerHTML += eval("a * b");
            // Löschen von a und b mit delete
            delete a;
            delete b;
        } catch (e) {

            document.getElementById("info").innerHTML =
                "Information in dem Ausnahmeobjekt: " + e.toString();
        }
    };
};