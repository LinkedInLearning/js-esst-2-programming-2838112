// Lambda in Verbindung mit der map()-Methode
// Eine map()-Methode wendet auf jedes Element des voranstehenden Arrays die als Parameter bereitgestellte Funktion an 
// und gibt das Ergebnis in einem neuen Array zurück.


// Deklaration eines Arrays mit Zahlen
arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

// Deklaration eines Arrays mit Texten
arr2 = ["Wer", "reitet", "so", "spät", "durch", "Nacht", "und", "Wind"]

// Anonyme Deklaration eines Lambda-Ausdrucks als Parameter einer map()-Methode. Jedes Element in der Datenstruktur wird mit 2 multipliziert.
// Der Übergabewert an den Lambda-Ausdruck ist jedes einzelne Element der Datenstruktur. 
// Rückgabe der verarbeiteten Datenstruktur als Array.

var erglbd1 = arr1.map(e => e * 2);
console.log(erglbd1);

// Alternative Deklaration mit einer anonymen Funktion.

var ergano1 = arr1.map(function(e) {
    return e * 2;
});
console.log(ergano1);


// Anonyme Deklaration eines Lambda-Ausdrucks als Parameter einer map()-Methode. 
// Für jedes Element in der Datenstruktur wird die Anzahl der Zeichen ermittelt.

var erglbd2a = arr2.map(e => e.length);
console.log(erglbd2a);


// Alternative Darstellung bei der anonymen Deklaration eines Lambda-Ausdrucks als Parameter einer map()-Methode und explizitem return.

var erglbd2b = arr2.map(e => {
    return e.length
});
console.log(erglbd2b);

// Alternative Deklaration mit einer anonymen Funktion.

var ergano2 = arr2.map(function(e) {
    return e.length;
});
console.log(ergano2);



// Anonyme Deklaration eines Lambda-Ausdrucks als Parameter einer map()-Methode. 
// Jedes Element in der Datenstruktur wird in Großbuchstaben konvertiert.

var erglbd3 = arr2.map(e => e.toUpperCase());
console.log(erglbd3);

// Alternative Deklaration mit einer anonymen Funktion.

var ergano3 = arr2.map(function(e) {
    return e.toUpperCase();
});
console.log(ergano3);