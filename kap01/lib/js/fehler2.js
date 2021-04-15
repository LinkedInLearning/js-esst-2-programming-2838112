document.getElementById("btn1").onclick =
    function() {

        navigator.geolocation.getCurrentPosition(function(e) {
            document.getElementById("info").innerHTML = e.coords.latitude + "," + e.coords.longitude;

        });
    };