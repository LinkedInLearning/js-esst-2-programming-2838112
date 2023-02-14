function verzoegerteAntwort(x) {
  return new Promise((resolve) => {


    var xhr = new XMLHttpRequest();

    xhr.open("GET", "verzoegerterAufruf.php?id=" + x, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        resolve(xhr.responseText);
      }
    };
    xhr.send();
  });
}

async function f1() {
  var x = await verzoegerteAntwort(1);
  x += await verzoegerteAntwort(2);
  x += await verzoegerteAntwort(3);
  console.log(x);
}

f1();
