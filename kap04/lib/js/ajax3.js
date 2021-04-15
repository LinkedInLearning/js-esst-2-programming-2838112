window.onload = function() {

    document.getElementById("bild1").onmousemove = function(e) {
        var query = "?x=" + e.clientX + "&y=" + e.clientY;
        xhr.open("get", "ajax.php" + query, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                document.getElementById("info").innerHTML = xhr.responseText;
            }
        };
        xhr.send();


    };


};