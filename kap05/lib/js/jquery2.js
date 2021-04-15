"use strict";
$(function() {
    $("#bild").mouseover(function() {
        $(this).fadeOut().fadeIn().slideUp().slideDown();
        $(".k1").css({
            opacity: 0.2
        });
    }).mouseout(function() {
        $("h2").css({
            opacity: 1
        });
        $("h2:eq(1)").css({
            background: "blue"
        });
    });

});