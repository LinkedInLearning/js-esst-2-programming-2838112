// Deklaration eines Lambda-Ausdrucks mit einem nichtgeklammerten Übergabewert, 
// Zuweisung zu einer Variablen sowie Rückgabe eines berechneten Werts.

var lambda1 = x => x * x;

// Deklaration eines Lambda-Ausdrucks mit einem Übergabewert in Klammern,
// Zuweisung zu einer Variablen sowie Rückgabe eines berechneten Werts.

var lambda2 = (x) => x * x;

// Alternative Deklaration mit einer anonymen Funktion.
var anonym1 = function(x) {
    return x * x;
}


console.log(lambda1(11)); // Aufruf der 1. Lambda-Funktion
console.log(lambda2(11)); // Aufruf der 2. Lambda-Funktion
console.log(anonym1(11)); // Aufruf der anonymen Funktion


// Einige weitere einfache Anwendungsbeispiele eines Lambda-Ausdrucks.
// Maximum
var lambda3 = (a, b) => a > b ? a : b;
// Minimum
var lambda4 = (a, b) => a < b ? a : b;

console.log(lambda3(5, 6)); // Aufruf der 3. Lambda-Funktion
console.log(lambda4(5, 6)); // Aufruf der 4. Lambda-Funktion