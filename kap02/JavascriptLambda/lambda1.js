// Lambda-Ausdrücke (Pfeilfunktionen) können entweder einen "knappen" oder einen gewöhnlichen Funktionskörper oder Blockkörper haben.
// Es darf kein Zeilenumbruch zwischen Parametern und dem Pfeil stehen.

// Einfache Deklaration eines Lambda-Ausdrucks ohne Parameter mit Zuweisung zu einer Variablen und Rückgabe von einem Literal.
// Verwendung der Notation eines "knappen" Funktionskörpers. 
// In einem knappen Funktionskörper ist lediglich ein Ausdruck nötig, und eine implizite Rückgabe wird automatisch angehängt. 
// Die Parameterliste für eine parameterlose Funktion muss mit einem Klammernpaar deutlich gemacht werden.

var lambda1 = () => 4;

// Alternative Deklaration eines Lambda-Ausdrucks ohne Parameter mit Zuweisung zu einer Variablen und Rückgabe von einem Literal.
// Explizite Verwendung von return.
// Der Körper eines Lambda-Ausdrucks kann in geschweifte Klammern gesetzt werden (gewöhnlicher Funktionskörper) und muss es auch, wenn dort nicht nur einfache Ausdrücke stehen 
// (etwa explizites return). In einem Blockkörper muss dann aber auch eine explizite Rückgabe-Anweisung verwendet werden.

var lambda2 = () => {
    return 4;
}

// Alternative Deklaration eines Lambda-Ausdrucks ohne Parameter mit _ statt leerer Klammern für den Parameterausdruck.
var lambda3 = _ => 4;

// Alternative Deklaration mit einer anonymen Funktion.
var anonym1 = function() {
    return 4;
}
console.log(lambda1()); // Aufruf der 1. Lambda-Funktion
console.log(lambda2()); // Aufruf der 2. Lambda-Funktion
console.log(lambda3()); // Aufruf der 3. Lambda-Funktion
console.log(anonym1()); // Aufruf der anonymen Funktion