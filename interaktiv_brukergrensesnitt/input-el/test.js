
    /* ----------------------------------------------

                   eksempel s.129

     ----------------------------------------------*/ 

let inpNavn = document.getElementById("inpNavn");
let txtNavn = document.getElementById("txtNavn");
inpNavn.oninput = function(){
    txtNavn.innerHTML = inpNavn.value;
}