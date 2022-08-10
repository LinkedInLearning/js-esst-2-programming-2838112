let meineZusicherung = new Promise(function(meineAufloesung, meineAblehnung) {
    setTimeout(function() { meineAufloesung(Math.random()); }, 3000),
        function() {
            console.log("Da hat etwas nicht geklappt.");

        }

});
console.log("Skript kommt zur Stelle, an der eine Zusicherung eingefordert wird und wartet auf die Erfüllung.");
meineZusicherung.then(function(value) {
    console.log(value);
});