"use strict";

function aussen() {
    var i = 9;

    function innen() {
        alert("Innen" + i);
    }
    innen();
}
aussen();