

window.onload=function(){
  document.querySelector("h1").innerText=("<i>"+Math.random()+"</i>"); 
 
	 console.log(document.querySelectorAll("h1")[0].innerHTML);
	 for (var i=0; i < document.querySelectorAll("h1").length;i++
	 ){
		 document.querySelectorAll("h1")[i].style.backgroundColor="#" + i + "0"+i+"AF" + i;
	 }
	 

   
};
