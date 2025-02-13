<?php
// Inhalt der POST-Anfrage als JSON lesen
$inputData = json_decode(file_get_contents('php://input'), true);

// Bild-IDs aus den gesendeten Daten extrahieren
$imageIds = $inputData['imageIds'] ?? [];

// Einfach die Bild-IDs ausgeben (Praxis: weiterverarbeiten)
if (!empty($imageIds)) {
    echo json_encode(['status' => 'success', 'imageIds' => $imageIds]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Keine Bild-IDs empfangen']);
}
?>