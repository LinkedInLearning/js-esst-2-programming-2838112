// Deklaration eines Lambda-Ausdrucks mit einem Parameter sowie Rückgabe eines Objekt-Literals.
// Der Body muss eingeklammert werden (runde Klammern), um so ein Objektliteral zurückzugeben.
// Die Rückgabe von Objekt-Literalen unter Verwendung der knappen Syntax params => {object:literal}  (also ohne runde Klammern) 
// wird nicht (!) so ausgeführt, wie man es u.U. erwarten würde:

var lambda1 = (x) => { key: x };
console.log(lambda1(42)); //  undefined 


var lambda2 = (x) => ({ key: x });
console.log(lambda2(42));