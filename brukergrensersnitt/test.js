
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

