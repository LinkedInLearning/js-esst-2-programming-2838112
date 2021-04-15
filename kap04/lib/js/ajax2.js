window.onload = function() {

    document.getElementById("bild1").onmouseover = function() {
        xhr.open("get", "ajax1.txt", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                document.getElementById("info").innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    };

    document.getElementById("bild2").onmouseover = function() {
        xhr.open("get", "ajax2.txt", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                document.getElementById("info").innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    };
    document.getElementById("bild3").onmouseover = function() {
        xhr.open("get", "ajax.xml", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                document.getElementById("info").innerHTML = xhr.responseXML.getElementsByTagName("vname")[0].innerHTML;
            }
        };
        xhr.send();
    };
    document.getElementById("bild4").onmouseover = function() {
        xhr.open("get", "ajax.json", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                document.getElementById("info").innerHTML = JSON.parse(xhr.responseText).person.vname;
            }
        };
        xhr.send();
    };

    document.getElementById("bild1").onmouseout = function() {
        document.getElementById("info").innerHTML = "";

    };
    document.getElementById("bild2").onmouseout = function() {
        document.getElementById("info").innerHTML = "";

    };
    document.getElementById("bild3").onmouseout = function() {
        document.getElementById("info").innerHTML = "";

    };
    document.getElementById("bild4").onmouseout = function() {
        document.getElementById("info").innerHTML = "";

    };
};