
    /* ----------------------------------------------

                   eksempel s.129-130
                   onfocus, onchange og oninput

     ----------------------------------------------*/ 

let inpNavn = document.getElementById("inpNavn");
let txtNavn = document.getElementById("txtNavn");
inpNavn.oninput = function(){//funksjon som printer ut navne
    txtNavn.innerHTML = inpNavn.value;
    
}
inpNavn.onchange = function(){
    //setter verdien til en tom tekst når vi trykker enter
    inpNavn.value=""; 
}

inpNavn.onfocus = function(){
    //når du trykker på inputen så kommer den til fokus
    console.log("nå er det fokus"); 
}


    /* ----------------------------------------------

                   eksempel s.133
                   Kalkis

     ----------------------------------------------*/ 
//definerer variabler
let tall1 = document.getElementById("tall1");
let tall2 = document.getElementById("tall2");
let txtSum = document.getElementById("txtSum");

function leggSammen () {
    //lager nye variabler for å regne og hente ut info
    console.log("hei");
    let t1 = Number(tall1.value);
    let t2 = Number(tall2.value);
    let sum = t1+t2;
    //printer summen ut
    txtSum.innerHTML = sum;
}
tall1.oninput = leggSammen;//Starter funksjonen når vi skriver i feltet
tall2.oninput = leggSammen; //Starter samme funksjon for det andre feltet
