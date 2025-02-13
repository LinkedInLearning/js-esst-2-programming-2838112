"use strict";

// Ein Array liegt vor
let numbers = [1, 2, 3, 4, 5];

/*
Die folgenden Schritte 1 - 3 sollen durch Methodenverkettung als eine Anweisung durchgeführt werden. 
Dabei kann jeweils die Lambda-Notation verwendet werden.
*/
let result = numbers.map(num => num * 2)  // 1. Jedes Element im Array soll vom Wert verdoppelt werden 
.filter(num => num > 5) // 2. Danach filtern aller Zahlen > 5 und Rückgabe des Ergebnisses
.reduce((sum, num) => sum + num, 0); // 3. Reduzieren des Arrays auf einzelnen Wert mit der Summe der Elemente

// 4. Ausgabe im Ergebnisbereich der Webseite und in der Konsole

document.getElementById("erg").innerHTML=result;  // Gibt 24 aus (6 + 8 + 10)
console.log(result);