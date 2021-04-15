"use strict";

function lotto() {
    var zahlen = [];
    var temp = 0;
    var i = 0;
    var vorhanden = false;

    while (i < 6) {
        vorhanden = false;
        temp = (Math.floor(1 + Math.random() * 49));

        for (var j in zahlen) {
            if (zahlen[j] == temp) {
                console.log(temp);
                vorhanden = true;
                break;
            }
        }
        if (vorhanden) {
            continue;
        }
        zahlen[i++] = temp;

    }
    return zahlen;
}
document.getElementById("btn1").onclick = function() {
    document.getElementById("info").innerHTML = lotto();
};