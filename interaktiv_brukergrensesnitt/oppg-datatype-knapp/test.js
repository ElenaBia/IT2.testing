
      /* ----------------------------------------------

                   oppg 1. s.128
 
            ----------------------------------------------*/     


//henter variabler fra html
let btn_oppg1 = document.getElementById("oppg_1");

//når knappen trykkes, aktiveres denne anonyme funksjonen
btn_oppg1.onclick = function(evt){
    let knapp = evt.target; //referer til knappen vi trykker
    //hva som skjer når vi trykker på knappen
    alert("du trykket på knappen med navnet: " + "'"+knapp.innerHTML+"'");
}


    /* ----------------------------------------------

                   oppg 2. s.128

     ----------------------------------------------*/   

let btn_elev = document.getElementById("elev");
let elev_output = document.getElementById("elev_output");

//definerer sum på antall elever i starten
let SumAntallElever = 0;

//henter info om hvor mange elever som blir tatt inn om gangen
let steg = document.getElementById("steg");


//Spørsmål. Hvordan kan eg flette inn evt.target her ?
// Er det best med anonyme funksj. eller navngitte funksj. i dette tilfelle---tenker på lengden?
btn_elev.onclick = function(){

    //gjør det også om til et tall pga. vi henter info fra string
    let EleverOmGangen = Number(steg.value);

    console.log(EleverOmGangen);

   //summerer alle elevene som kommer inn
    SumAntallElever += EleverOmGangen;

    //begrenser til 30 elever. Hva som skjer når det er over eller lik 30:
    if(SumAntallElever>=30){
        elev_output.innerHTML = "No er det " + SumAntallElever + " elever. Det er fullt!";
        //tar vekk knappen
        btn_elev.style.display = "none";
    }
    else{
        //ellers bare printe ut totalt antall elever
        elev_output.innerHTML = "No er det " + SumAntallElever + " elever inne.";
    }
   
    //sjekker med konsolen
    console.log("Du tar " + EleverOmGangen + " elev(er) om gangen.");

}



    /* ----------------------------------------------

                   oppg 4/5. s.128

     ----------------------------------------------*/   


//henter ut html elementer som skal manipuleres og brukes i JS
let btn_bilde1 = document.getElementById("knappKatt");
let btn_bilde2 = document.getElementById("knappMus");
let bilde = document.getElementById("bilde");

function f_visBilde(evt){
    //refererer til kanppen som blir trykket
    let knapp = evt.target; 
    //Henter navnet på bildefilen ut ifra knappen som ble trykket
    let bildefil =knapp.getAttribute("data-bilde");
    //setter src til samme som finnes i knappen
    bilde.src = bildefil; 
}

//legger til klikke funksjon til knappene, for å vise bildet deres (ligger i attributtene)
btn_bilde1.onclick = f_visBilde;
btn_bilde2.onclick = f_visBilde;
