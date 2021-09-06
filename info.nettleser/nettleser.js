document.getElementById("utskrift").innerHTML =
 "Fanen du har åpnet er " + window.innerWidth 
 + " piksler brei, og " 
 + window.innerHeight + " piksler høg. Nettsida som er open er " 
 + window.location + "."
;

console.log("Din aplikasjon " + navigator.appName)
console.log("navigator.cookieEnabled: " + navigator.cookieEnabled);

document.getElementById ("personlig_info").innerHTML = "språket du bruker "
 + navigator.languages + "."
;

  // Geolokasjon
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
      console.log("Latitude: " + position.coords.latitude +
      "Longitude: " + position.coords.longitude);
  }