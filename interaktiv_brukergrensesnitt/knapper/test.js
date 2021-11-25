
 /* ------------------------------------------------
 
                         eksempel 1 
      
       ---------------------------------------------------*/

let radio_ja = document.getElementById("radio_ja");
let radio_nei = document.getElementById("radio_nei");
let info = document.getElementById("info");

//lager en funksjon
function SjekkRømmedressing(){
    //man sjekker hvilken knapp ble avkrysset
    if(radio_ja.checked){
        info.innerHTML ="du har bestilt med rømme";
    }
    else{//skjer hvis ja-knappen ble ikke avkrysset
        info.innerHTML = "Du ønsker ikke rømme";
    }
}

radio_ja.onclick = SjekkRømmedressing;
radio_nei.onclick = SjekkRømmedressing;



 /* ------------------------------------------------
 
                          eksempel 2
      
       ---------------------------------------------------*/
let blue = document.getElementById("blue");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let imgBallong = document.getElementById("imgBallong");

function f_byttFarge(evt){
    //referer til hvilken knapp det trykkes
    let knapp = evt.target;

    //henter data fra kanppen
    let fargeBilde = knapp.getAttribute("data-bilde");
    //setter dataen som src for bildet
    imgBallong.src=fargeBilde;
}
//sier at alle knappene skal aktivere samme funksjon
blue.onclick= red.onclick= yellow.onclick= green.onclick = f_byttFarge;

/*---------------------------------------------------
 
eksempel 3 check box 

-----------------------------------------------------*/
//henter ut info fra input felt
let ost = document.getElementById("ost");
let dressing = document.getElementById("dressing");
let bacon = document.getElementById("bacon");
let guacamole = document.getElementById("guacamole");

//henter el fra html for å manipulere
let utskrift = document.getElementById("ekstra");

//lager en array som skal inneholde kombo av ekstra
let array_ekstra = [];

//sier at hver gang boksene brukes skal funksjonen aktiveres
guacamole.onchange= bacon.onchange =ost.onchange = dressing.onchange = f_leggTil;


function f_leggTil(evt){
    //refererer til knappen som aktiverer funksj. sist
    let c_boks = evt.target;

    //henter ut dataen til den
    let type_ekstra = c_boks.getAttribute("data-svar");

    //tester om det går
    console.log(type_ekstra);

    //hvis boksen krysses av
    if(c_boks.checked){
        //pushes dataen inn i arrayen for å lagen en slags liste
        array_ekstra.push(type_ekstra)
    }
    //hvis knappen uncheck-es skal man ta vekk knappens data
    else{
       array_ekstra.splice(array_ekstra.indexOf(type_ekstra),1);
       //hvis du skriver array_ekstra[type_ekst] vil den fjerne første el, i listen
    }
    //tester hvordan arrayen ser ut
    console.log(array_ekstra);
    //printer ut kombo av toppings
    utskrift.innerHTML="Du valgte " + array_ekstra;
}




/*---------------------------------------------------
 
eksempel 4 nedtrekkliste

-----------------------------------------------------*/


//henter ut fra html
let velgStr = document.getElementById("velgStr");
let str_output = document.getElementById("str_output");


velgStr.onchange= function(){
    //indexen til valg alternativet
    let index = velgStr.selectedIndex; 
    //Option elementet som er valgt
    let valgtStr = velgStr[index];
    str_output.innerHTML = "Størrelsen du valgte er " + valgtStr.innerHTML;

}

