//tester at koblingen funker
console.log("Hurra! Javascript funker!");

//alert("Hurra! Javascript funker!");


//finner variabelen fra html
let klokkeslett = document.getElementById("klokkeslett");
console.log(klokkeslett); //sjekker consolen

//manipulering av css og js
klokkeslett.style.color ="green"; //endrer css fra js
klokkeslett.innerHTML = "00:00:00"; //endrer html fra js

//failed funksjon
/*setInterval (Timer, 1000);
function Timer() {
  const tid = new Date ();
  klokkeslett = tid.getHours()+ ":" + tid.getMinutes () + ":" + tid.getSeconds();
}*/


//få  nettsiden - til å refreshe hver sekund.
/*window.setTimeout(function () {
    window.location.reload();
  }, 1000);*/
/* */

//prøver w3schools exempel, skal oppdatere klokken
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("skrift").innerHTML = d.toLocaleTimeString();
  document.getElementById("klokkeslett").innerHTML= d.toLocaleTimeString();
}