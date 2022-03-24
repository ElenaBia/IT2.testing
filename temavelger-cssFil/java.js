function f_TemaVelger(){

    //henter id til dropdown og lenke
    const temavelger = document.getElementById("temaVelger");
    const lenkeCSS = document.getElementById("lenkeCSS");
   // console.log("vi kjører");
   //sier at tema som blir brukt skal enten den tidligere brukte tema, eller bare
   // start tema - om det er første gangen for brukeren 
    const bruktTema = localStorage.getItem("tema") || "start";

    //her skal man bytte tema
    function f_aktiverTema(temaNavn){
        //henter da lenken
        lenkeCSS.setAttribute("href", "tema/"+temaNavn+".css");
    };

    //når man velger et tema--
    temavelger.addEventListener("change", function(){
        //så aktiverer vi temaet man klikket på
        f_aktiverTema(temavelger.value);
        //lagrer tema som blir brukt i local Storage - fungerer bra
        localStorage.setItem("tema", temavelger.value);
    });
    //aktiverer tema
    f_aktiverTema(bruktTema);
    //trenger 
}

f_TemaVelger();