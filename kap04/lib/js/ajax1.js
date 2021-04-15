window.onload = function() {

    document.getElementById("bild").onmouseover = function() {
        xhr.open("get", "daten.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                document.getElementById("info").innerHTML = xhr.responseText;
            }
        };
        xhr.send();


    };
    document.getElementById("bild").onmouseout = function() {
        document.getElementById("info").innerHTML = "";

    };

};