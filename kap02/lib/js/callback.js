"use strict";
var test = function() {
    alert(42);
}

function test2() {
    return function() {

    };
}
document.getElementById("btn").onclick = test2();