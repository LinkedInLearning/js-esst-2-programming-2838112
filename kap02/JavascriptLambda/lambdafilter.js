// Lambda in Verbindung mit der filter()-Methode. Eine filter()-Methode wendet auf jedes Element des voranstehenden Arrays 
// die als Parameter bereitgestellte Funktion an und gibt als Ergebnis ein neues Array mit allen Elementen zurück,  
// die den von der bereitgestellten Funktion implementierten Test (Filter) bestehen.


// Deklaration eines Arrays mit Zahlen
arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

// Deklaration eines Arrays mit Texten
arr2 = ["Wer", "reitet", "so", "spät", "durch", "Nacht", "und", "Wind"]

// Anonyme Deklaration eines Lambda-Ausdrucks als Parameter einer filter()-Methode. Jedes Element in der Datenstruktur wird modulo 2 genommen
// und getestet, ob das Ergebnis 0 ist. Nur dann kommt das Element zum Rückgabe-Array.


var erglbd1 = arr1.filter(e => e % 2 == 0);
console.log(erglbd1);

// Alternative Deklaration mit einer anonymen Funktion.

var ergano1 = arr1.filter(function(e) {
    if (e % 2 == 0)
        return e;
});
console.log(ergano1);


// Anonyme Deklaration eines Lambda-Ausdrucks als Parameter einer map()-Methode. 
// Für jedes Element in der Datenstruktur wird die Anzahl der Zeichen ermittelt.

var erglbd2a = arr2.filter(e => e.length > 3);
console.log(erglbd2a);



// Alternative Deklaration mit einer anonymen Funktion

var ergano2 = arr2.filter(function(e) {
    if (e.length > 3)
        return e.length;
});
console.log(ergano2);