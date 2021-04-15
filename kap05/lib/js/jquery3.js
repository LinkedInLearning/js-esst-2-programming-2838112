"use strict";
$(function() {
    $("#bild").mousemove(function() {
        $.get("daten.php", function(data) {
            $("#info").html(data);
        });
    }).mouseout(function() {
        $("#info").html("");
    });

});