// Deklaration eines Lambda-Ausdrucks mit mehreren Übergabewerten,
// Zuweisung zu einer Variablen sowie Rückgabe eines berechneten Werts.
// Bei mehreren Parametern müssen diese geklammert werden.

var lambda1 = (x, y) => x * y;

// Alternative Deklaration mit einer anonymen Funktion.
var anonym1 = function(x, y) {
    return x * y;
}
console.log(lambda1(11, 2)); // Aufruf der Lambda-Funktion

console.log(anonym1(11, 2)); // Aufruf der anonymen Funktion