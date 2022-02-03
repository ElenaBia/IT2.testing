let info = document.getElementById("info");

// Lyder
let trommer = document.getElementById("trommer");
let piano = document.getElementById("piano");
let gitar = document.getElementById("gitar");

// Bilder
let imgT = document.getElementById("imgT");
let imgP = document.getElementById("imgP");
let imgG = document.getElementById("imgG");

// Finne alle audio-elementer
var lyder = document.querySelectorAll("audio");
console.log(lyder);

//ingen instrumenter som spiller
piano.volume=0;
gitar.volume=0;
trommer.volume=0;

//vil bruke data- fra html