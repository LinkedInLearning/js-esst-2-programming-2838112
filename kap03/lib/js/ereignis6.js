"use strict";
window.onload=function(){
    /**
     * Reaktion mit einer anonymen Funktionsreferenz auf onmousemove beim umgebenden Div
     */
    document.getElementById("bildanzeige").onmousemove = function(e) {
        document.getElementById("info").innerHTML = e.clientX + "," + e.clientY;
    };
    /**
     * Reaktion mit einer anonymen Funktionsreferenz auf onmouseout beim umgebenden Div
     */
    document.getElementById("bildanzeige").onmouseout = function() {
        document.getElementById("info").innerHTML = "";
    };
};
