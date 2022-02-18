// Lambda-Ausdrücke und anonyme Funktionen haben sehr viele Gemeinsamkeiten, aber auch gravierende Unterschiede!
// Lambda-Ausdrücke haben meist eine kürzere Syntax, aber kein eigenes this, arguments, super oder new.target. 
// Lambda-Ausdrücke haben auch keine prototype-Eigenschaft.
// Lambda-Ausdrücke eignen sich für Funktionen, aber nicht als Methode und können nicht als Konstruktoren verwendet werden.


// Einfache Deklaration eines Lambda-Ausdrucks ohne Parameter mit Zuweisung zu einer Variablen und Rückgabe von this.
var lambda1 = () => this; // {}

// Alternative Deklaration mit einer anonymen Funktion.
var anonym1 = function() {
    return this;
}
console.log(lambda1()); // Aufruf der Lambda-Funktion - leeres Objekt
console.log(anonym1()); // Aufruf der anonymen Funktion - this ist globales Objekt

// Versuch der Deklaration eines Konstruktors mit einem Lambda-Ausdruck - Achtung Fehler beim Aufruf!!

var KonstruktorLambda1 = () => {
    this.test = 1;
}

// Alternative Deklaration mit einer anonymen Funktion

var KonstruktorAnonym1 = function() {
    this.test = 1;
}

// Aufruf als Konstruktor
//console.log(new KonstruktorLambda1()); // Lambda-Ausdruck wirft TypeError
console.log(new KonstruktorAnonym1()); // Anonyme Funktion geht ohne Probleme


// Versuch, in einem Lambda-Ausdruck arguments zu nutzen. 
// Achtung: arguments ist beim Aufruf einfach eine Referenz auf den Namen innerhalb des umschließenden Geltungsbereichs (scope)!!

var argumentsLambda1 = (x) => {
    return arguments[0];
}

console.log(argumentsLambda1(1));

// Versuch, in einem Lambda-Ausdruck prototype zu nutzen. 
var prototypeLambda1 = () => {};
console.log(prototypeLambda1.prototype); // undefined