// pour l'exemple je vais selectionné un bouton et lui ajouter un event
// on déclare tout les constante et variable dans le haut du document

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
    return (total = x);
  } else {
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
  } else {
    total *= x;
    return total;
  }
}

// ---------------------------------------------
// fin calculatrice

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
  mousemouve.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemouve.style.transform = "scale(1) translate(-50%, -50%)";
  mousemouve.style.border = "2px solid teal";
});

ajoutBord.addEventListener("mouseenter", () => {
  ajoutBord.style.background = "rgba(0, 0, 0, 0.6)";
});

ajoutBord.addEventListener("mouseout", () => {
  ajoutBord.style.background = "pink";
});

reponse.addEventListener("mouseover", () => {
  reponse.style.transform = "rotate(2deg)";
});

// maintenant les keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  console.log(e.key);
  key.textContent = e.key;

  if(e.key === "z") {
      keypressContainer.style.background = "cyan";
  } else if (e.key === "a"){
      keypressContainer.style.background = "green";
  } else {
      keypressContainer.style.background = "red";
  }
});
