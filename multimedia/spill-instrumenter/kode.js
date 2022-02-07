var info = document.getElementById("info");

// Lyder
var trommer = document.getElementById("trommer");
var bass = document.getElementById("bass");
var piano = document.getElementById("piano");
var gitar = document.getElementById("gitar");

// Bilder
var imgTrommer = document.getElementById("imgTrommer");
var imgBass = document.getElementById("imgBass");
var imgPiano = document.getElementById("imgPiano");
var imgGitar = document.getElementById("imgGitar");

// Finne alle audio-elementer
var lyder = document.querySelectorAll("audio");
console.log(lyder);

// Setter volum pÃ¥ lydfilene
trommer.volume = 1;
// trommer.playbackRate = 1; Sett farten
bass.volume = 0;
piano.volume = 0;
gitar.volume = 0;

var trommeInfo = `<h1>Trommer</h1>
                    <p>Trommen holder takten!</p>`;

var bassInfo = `<h1>Bass</h1>
                    <p>Bassen gir takt, tone og rytme.</p>`;


var pianoInfo = `<h1>Piano</h1>
                    <p>Her får du høre pianostemmen!</p>`;

var gitarInfo = `<h1>Gitar</h1>
                    <p>Gitaren låter bra!</p>`;



// Klikk pÃ¥ bildene skrur lyd av og pÃ¥
imgTrommer.onclick = function() { // NB: Alternativt bruker du addEventListener slik me hovudsakleg har gjort.
    if (trommer.volume === 1) {
        trommer.volume = 0;
        imgTrommer.src = "bileter/trommer_blek.png";
    } else {
        trommer.volume = 1;
        imgTrommer.src = "bileter/trommer_sort.png";
    }
};

imgBass.onclick = function() {
    bass.currentTime = trommer.currentTime;
    if (bass.volume === 1) {
        bass.volume = 0;
        imgBass.src = "bileter/bass_blek.png";
    } else {
        bass.volume = 1;
        imgBass.src = "bileter/bass_sort.png";
    }
};



imgPiano.onclick = function() {
    piano.currentTime = trommer.currentTime;
    if (piano.volume === 1) {
        piano.volume = 0;
        imgPiano.src = "bileter/piano_blek.png";
    } else {
        piano.volume = 1;
        imgPiano.src = "bileter/piano_sort.png";
    }
};

imgGitar.onclick = function() {
    gitar.currentTime = trommer.currentTime;
    if (gitar.volume === 1) {
        gitar.volume = 0;
        imgGitar.src = "bileter/gitar_blek.png";
    } else {
        gitar.volume = 1;
        imgGitar.src = "bileter/gitar_sort.png";
    }
};

imgTrommer.onmouseover = function() {
    info.innerHTML = trommeInfo;
};

imgBass.onmouseover = function() {
    info.innerHTML = bassInfo;
};



imgPiano.onmouseover = function() {
    info.innerHTML = pianoInfo;
};

imgGitar.onmouseover = function() {
    info.innerHTML = gitarInfo;
};
