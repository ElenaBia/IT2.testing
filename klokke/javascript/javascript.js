console.log("Hurra! Javascript funker!");

//alert("Hurra! Javascript funker!");

let klokkeslett = document.getElementById("klokkeslett");
console.log(klokkeslett);

klokkeslett.style.color ="green";
klokkeslett.innerHTML = "00:00:00";

let tid = new Date ();
let tidspunkt =tid.getHours()+ ":" + tid.getMinutes () + ":" + tid.getSeconds();
klokkeslett.innerHTML = tidspunkt;