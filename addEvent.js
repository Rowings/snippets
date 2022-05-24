// pour l'exemple je vais selectionné un bouton et lui ajouter un event
// on déclare tout les constante et variable dans le haut du document

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const reponse = document.querySelector("p");

btn1.addEventListener("click", () => {
  console.log("click !");
});

btn2.addEventListener("click", () => {
    console.log("click 2 !");
  });


// ----------------------------------------------------------------------------

// Exercice calculatrice de base
 let total = 0;

 function addition(x) {
     if (total === 0) {
         return (total = x);
     } else {
   total += x;
   return total;
 }
 }

 function soustraction(x) {
     if (total === 0) {
         return( total = x);
     }
     else {
   total -= x;
   return total;
 }
 }

 function division(x) {
     if (total === 0) {
         return (total = x);
     } else {
   total /= x;
   return total;
 }
 }

 function multiplication(x) {
     if (total === 0) {
         return (total = x);
     }  else {
   total *= x;
   return total;
 }
 }


 // ---------------------------------------------
 // fin calculatrice

 document.querySelector("h4").style.background = "yellow";

 ajoutBord.style.borderRadius = ("150px");
 ajoutBord.style.background = ("yellow");

const ajoutBord = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.querySelector("#btn-2");
const reponse = document.querySelector("p");

ajoutBord.addEventListener("click", () => {
  ajoutBord.style.background = "";
});

btn1.addEventListener("click", () => {
  reponse.classList.add("show-response");
  reponse.style.background = "green";
});

btn2.addEventListener("click", () => {
  reponse.classList.add("show-response");
  reponse.style.background = "red";
});

console.log(reponse);

//---------------------------------------------------


// ici il y a les mouvements que l'ont peut faire avec une souris

const mousemouve = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemouve.style.left = e.pageX + "px";
  mousemouve.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemouve.style.transform = "scale(2) translate(-25%, -25%)"
});

window.addEventListener("mouseup", () => {
  mousemouve.style.transform = "scale(1) translate(-50%, -50%)"
  mousemouve.style.border = "2px solid teal";
});

ajoutBord.addEventListener("mouseenter", () => {
  ajoutBord.style.background = "rgba(0, 0, 0, 0.6)"
})

ajoutBord.addEventListener("mouseout", () => {
  ajoutBord.style.background = "pink";
})

reponse.addEventListener("mouseover", () => {
  reponse.style.transform = "rotate(2deg)";
})