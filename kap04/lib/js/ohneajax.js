"use strict";
window.onload = function() {
    window.frames[1].location.href = "http://localhost/LiL/kap04/daten.php";
    document.getElementById("btn1").onclick = function() {
        window.frames[1].location.href = "http://localhost/LiL/kap04/daten.php";

    };
    document.getElementById("btn2").onclick = function() {
        window.frames[2].location.href = "http://localhost/LiL/kap04/daten.php";

    };

    document.getElementById("btn3").onclick = function() {
        window.frames[3].location.href = "https://rjs.de/ajax/daten.php";

    };

    document.getElementById("btn4").onclick = function() {
        document.getElementById("info").innerHTML = window.frames[2].document.getElementsByTagName("body")[0].innerHTML;
    };

};