function objektAuswertung(o) {
    var erg = "";
    for (var i in o) {
        erg += i + ":" + o[i] + "\n";
    }
    return erg;
}
console.log(objektAuswertung(screen));