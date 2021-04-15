"use strict";

function finde(tT, suche) {
    document.write("Durchsuchter Text:<br/>" + tT + "<br/>Suchausdruck: " +
        suche.toString() + "<br/>Suchausdruck vorhanden: " +
        suche.test(tT) + "<br/>");

}

function zerlege(tT, suche) {
    var result;
    document.write("<ol>");
    do {
        result = suche.exec(tT);
        if (result != null)
            document.write("<li>" + result + "</li>");
        else
            break;
    } while (true);
    document.write("</ol><hr />");

}
finde("Wir sind im Auftrag des Herrn unterwegs.", new RegExp("i.", "g"));
zerlege("Wir sind im Auftrag des Herrn unterwegs.", new RegExp("i.", "g"));
finde("Wir sind im Auftrag des Herrn unterwegs.", new RegExp("e..", "g"));
zerlege("Wir sind im Auftrag des Herrn unterwegs.", new RegExp("e..", "g"));
finde("Dieser Papagei ist nicht mehr. Er hat aufgehört zu existieren. Er hat sein Leben beschlossen und hat die Augen zugemacht. Er ist eine Leiche, des Lebens beraubt, er ruht in Frieden. Wenn Sie ihn nicht auf den Ast genagelt hätten, würde er sich die Radieschen von unten ansehen. Er hat's hinter sich und ist gestorben. Das ist ein Ex-Papagei", new RegExp("Papa", "g"));
zerlege("Dieser Papagei ist nicht mehr. Er hat aufgehört zu existieren. Er hat sein Leben beschlossen und hat die Augen zugemacht. Er ist eine Leiche, des Lebens beraubt, er ruht in Frieden. Wenn Sie ihn nicht auf den Ast genagelt hätten, würde er sich die Radieschen von unten ansehen. Er hat's hinter sich und ist gestorben. Das ist ein Ex-Papagei.", new RegExp("Papa", "g"));


finde('"Und jetzt zu etwas vollkommen anderem." So lautete die Überleitung zum nächsten Sketch in der Fernsehsendung Monty Python\'s Flying Circus (1969 bis 1974). Das Beste aus den ersten beiden der vier Staffeln wurden in dem Film "And now for something completely different" ("Die wunderbare Welt der Schwerkraft") von 1971 zusammengefasst.', new RegExp(/\d{4}/, "g"));
zerlege('"Und jetzt zu etwas vollkommen anderem." So lautete die Überleitung zum nächsten Sketch in der Fernsehsendung Monty Python\'s Flying Circus (1969 bis 1974). Das Beste aus den ersten beiden der vier Staffeln wurden in dem Film "And now for something completely different" ("Die wunderbare Welt der Schwerkraft") von 1971 zusammengefasst.', new RegExp(/\d{4}/, "g"));