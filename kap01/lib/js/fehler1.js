"use strict";
var f = null;
document.getElementById("btn1").onclick =
    function() {
        f = open("http://rjs.de");
    };
document.getElementById("btn2").onclick =
    function() {
        if (f == null) {
            f.close();
        }
    };
document.getElementById("btn3").onclick =
    function() {
        open("https://www.linkedin.com/learning", "Afenster", "width=300, height=450, " + " resizable=yes, directories=yes, menubar=yes, location=yes");
    };
document.getElementById("btn4").onclick =
    function() {
        open("images/b.jpg", "Afenster", "width=450, height=350, resizable=no, " + " directories=no, menubar=no, location=no");
    };