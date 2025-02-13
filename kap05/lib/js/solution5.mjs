import {drawLottoNumbers} from './drawnumbers.mjs';

// Test-Funktion für wiederholte Tests
function runTest(testName, testFunction, iterations = 100) {
    let failed = false;
    for (let i = 0; i < iterations; i++) {
        try {
            testFunction(); // Test ausführen
        } catch (error) {
            console.error(`Test "${testName}" fehlgeschlagen bei Iteration ${i + 1}: ${error.message}`);
            failed = true;
            break; // Bei Fehler abbrechen und den Fehler ausgeben
        }
    }

    if (!failed) {
        console.log(`Test "${testName}" erfolgreich für alle ${iterations} Durchläufe`);
    }
}

// Beispiel-Test 1: Die gezogenen Zahlen müssen zwischen 1 und 49 liegen
runTest('Lottozahlen müssen zwischen 1 und 49 liegen', () => {
    const result = drawLottoNumbers();
    result.forEach(num => {
        if (num < 1 || num > 49) {
            throw new Error(`Zahl ${num} liegt außerhalb des gültigen Bereichs (1-49)`);
        }
    });
});

// Beispiel-Test 2: Es müssen genau 6 Zahlen zurückgegeben werden
runTest('Es müssen genau 6 Lottozahlen gezogen werden', () => {
    const result = drawLottoNumbers();
    if (result.length !== 6) {
        throw new Error(`Erwartet 6 Zahlen, aber erhalten: ${result.length}`);
    }
});

// Beispiel-Test 3: Alle gezogenen Zahlen müssen einzigartig sein
runTest('Die Lottozahlen dürfen keine Duplikate enthalten', () => {
    const result = drawLottoNumbers();
    const uniqueNumbers = new Set(result); // Set entfernt Duplikate
    if (uniqueNumbers.size !== 6) {
        throw new Error(`Erwartet 6 einzigartige Zahlen, aber gefunden: ${result}`);
    }
});
