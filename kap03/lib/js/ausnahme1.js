"use strict";
window.onload = function() {
    document.getElementById("btn1").onclick = function() {
        document.getElementById("info").innerHTML = eval("21 * 2");
    };
    document.getElementById("btn2").onclick = function() {
        document.getElementById("info").innerHTML = eval("a * b");
    };
};