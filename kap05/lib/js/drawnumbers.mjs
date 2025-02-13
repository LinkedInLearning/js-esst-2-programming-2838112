// Lottozahlen-Ziehung (mit zufälligen Fehlerquellen)
export function drawLottoNumbers() {
    const numbers = [];

    // Zufallsgenerator könnte mal einen Fehler verursachen
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 50);
        numbers.push(randomNumber); 
    }

    return numbers;
}
