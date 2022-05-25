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

// ici on à une const pour le son, l'object Audio existe lui déjà dans javascript
// const ring = () => {
//   const audio = new Audio();
//   audio.src = "./Enter.mp3";
//   audio.play();
// };

// document.addEventListener("keypress", (e) => {
//   console.log(e.key);
//   key.textContent = e.key;

//   if (e.key === "z") {
//     keypressContainer.style.background = "cyan";
//   } else if (e.key === "a") {
//     keypressContainer.style.background = "green";
//   } else {
//     keypressContainer.style.background = "red";
//   }

//   ring();
// });

// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = -50 + "px";
  }
});

// evenement sur les formulaires / Form events
// 2 type different input -submit

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {

  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Language préféré : ${language}</h4>`;
  } else {
    alert("Accepter les CGV")

  }
});


// Load event 





