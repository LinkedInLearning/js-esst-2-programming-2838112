function drawLottoNumbers() {
    numbers = [];

    // Zufallsgenerator könnte mal einen Fehler verursachen
    while (numbers.length < 6) {
        randomNumber = Math.floor(Math.random() * 50);
        numbers.push(randomNumber); 
    }

    return numbers;
}