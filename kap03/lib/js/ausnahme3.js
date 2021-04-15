// Kein "use strict"; - wegen der with-Anweisung
window.onload = function() {
    with(document) {
        getElementById("info").innerHTML = "";
        getElementsByTagName("button")[0].onclick = function() {
            try {
                throw new Error("Nicht doch");
            } catch (e) {
                catchMeldung(e);
            }
        };
        getElementsByTagName("button")[1].onclick = function() {
            try {
                throw "Doch";
            } catch (e) {
                catchMeldung(e);
            }
        };
        getElementsByTagName("button")[2].onclick = function() {
            try {
                throw new Date();
            } catch (e) {
                catchMeldung(e);
            }
        };
        getElementsByTagName("button")[3].onclick = function() {
            try {
                throw 42;
            } catch (e) {
                catchMeldung(e);
            }
        };
    }

    function catchMeldung(e) {
        document.getElementById("info").innerHTML = "Typ: " + (typeof e) + ", Meldung: " + e + "<br/>";
    }
};