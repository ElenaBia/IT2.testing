//informasjon man kan finne i nettleseren
document.getElementById("utskrift").innerHTML = "Fanen du har åpnet er " + window.innerWidth + " piksler brei, og " + window.innerHeight + " piksler høy. Nettsiden som er åpen er " + window.location + "." ;

//A Boolean, indicating whether cookies are enabled in the browser.
//Returns true if enabled, otherwise it returns false

console.log("navigator.cookieEnabled: " + navigator.cookieEnabled);

//viser hvilket språk nettleseren bruker
document.getElementById ("personlig_info").innerHTML = "språket du bruker" + navigator.languages + "." ;

// Geolokasjon
let x = document.getElementById("x");
x.innerHTML = "det funker";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;
}

