/**
 * Diese Funktion iteriert über ein Objekt und gibt eine Tabelle mit den Eigenschaften zurück
 * @param {*} o 
 * @returns Eine Tabelle mit den Eigenschafte als String
 * @description Diese Funktion iteriert über ein Objekt und gibt eine Tabelle mit den Eigenschaften zurück
 * 
 */
function objektAuswertung(o) {
    var erg = "<table><tr><th>Eigenschaft</th><th>Wert</th></tr>";

    for (var i in o) {
        erg += "<tr><td>" + i + "</td><td>" + o[i] + "</td></tr>";
    }
    erg += "</table>"
    return erg;
}