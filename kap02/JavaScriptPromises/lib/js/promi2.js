let myPromise = new Promise(function(myResolve, myReject) {
	let resObjekt = erzXHRObjekt();
    resObjekt.open('GET', "ajax.txt");
    resObjekt.onload = function() {
        if (resObjekt.status == 200) {
            myResolve(resObjekt.response);
        } else {
            myReject("File not Found");
        }
    };
    resObjekt.send();
});
window.onload=function(){
document.getElementById("frage").onclick=function(){
myPromise.then(
    function(value) {
        document.getElementById("antwort").innerHTML=value; 
        
        },
    function(error) { console.log(error); }
);
};
};