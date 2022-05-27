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

document.addEventListener("keypress", (e) => {
  console.log(e.key);
  key.textContent = e.key;

  if (e.key === "z") {
    keypressContainer.style.background = "cyan";
  } else if (e.key === "a") {
    keypressContainer.style.background = "green";
  } else {
    keypressContainer.style.background = "red";
  }

  //   ring();
});

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
    alert("Accepter les CGV");
  }
});

// Load event

window.addEventListener("load", () => {
  console.log("Document Chargéeeeeee !");
});

//----------------------------

// Les forEach -- ça veut dire pour chacun d'eux tu leurs donne cette logique
// ça permet d'éviter de faire plusieurs addEventListener si plusieurs élément de notre
// page font la même choses

const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)"; // ceci nous permet de reduire la taille de l'élément cliqué
  });
});

// cette maniere de faire permet de faire en sorte que lorsqu'on clique sur element de la page
// on sait le loger dans la console

//-------------------------------------

// addEventListener vs onlick

// document.body.onclick = () => {
//   console.log("clickos");
// };

// avec un onclick on ne peut le reattribuer, le second ecrase le premier
// il a bien sure des qualité, il peut être utiliser directement dans le html

// le Bubbling c'est le faite que l'eventListener est exécuté en dernier comparé au autres

// Bubbling  => fin (de base l'eventlistener est paramétré en mode Bubbling)

document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false // de base il est sur false, donc il lis dans l'ordre, haut en bas
);

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click two ! ");
  },
  true // avec true il lis la feuille de cascades des evenements dans l'ordre inverse bas vers haut
);

// --------------------------------

// stopper la propagation d'un evenement

// Stop propagation

// ajoutBord.addEventListener("click", (e) => {
//   alert("tu click");
//   e.stopPropagation();
// });

// il y a une méthode qui s'appelle removeEventListener pour l'enelever du coup

// BOM Brower Object Model

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("https://google.com", "cours js", "height=600", "width=800");

// window.close

// evenement adossées à window, qui peuvent s'executer sans préciser le window. devant

btn2.addEventListener("click", () => {
  confirm("t'es sure ?");
});

// confirm contrairement à alert, nous proposer le bouton annuler, on peut l'invoquer sans le window

// prompt
// permet d'ouvrir une boite de dialogue qui demande une question

btn1.addEventListener("click", () => {
  let answer = prompt("donne ton blaze");
  console.log(answer);

  ajoutBord.innerHTML += "<h3> Bravo " + answer + "</h3>"; // ajouter le + devant le = permet de rajouter le h3 sans ecraser le reste de la div
});

// timer, compte à rebours

setTimeout(() => {
  ajoutBord.style.borderRadius = "300px";
  ajoutBord.style.transition = "0.6s ease"; // logique à éxécuter // fonction fléché ou normal
}, 2000); // temps de miliseconde avant d'éxéctuer

// setInterval(() => {
//   document.body.innerHTML +=
//     ` <div class='box'>
//         <h2>Nouvelle Boite !</h2>
//       </div>
//     `

// }, 10000); //  temps de miliseconde avant d'éxéctuer

// le probleme ici est que il va continuer à se declencher à l'infini il faut donc savoir l'arreter
// pour ceci on met le set interval dans une variable fin de pouvoir par ex lui addoser un eventListener ou simplement le clear directement

// je le met dans une variable
let interval = setInterval(() => {
  document.body.innerHTML += ` <div class='box'> 
        <h2>Nouvelle Boite !</h2>
      </div>
    `;
}, 5000);

// je créer un addEventListener

document.body.addEventListener("click", (e) => {
  // e.target.remove(); permet d'enlever un element du dom
  clearInterval(interval); // permet de supprimer l'interval
});

// Location ( BOM )

// console.log(location.href); // permet d'avoir le lien précis se là ou on se trouve
// console.log(location.host); // permet d'avoir le nom du site en local c'est l'ip
// console.log(location.pathname); // l'elément après le lien par ex le fichier script se trouve dans le dossier js alors /js apparaitra
// console.log(location.search); // affiche le contenue de la recherche utilisateur
// location.replace("http://lequipe.fr"); // permet de redigirer vers un autre site


// window.onload = () => {
//   location.href = "http://twitter.com";
// }


// Navigator

console.log(navigator.userAgent); // permet d'avoir les informations de l'utilisateur


// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition
// voici la doc pour la position géographique il y a même déjà un code tout fait que l'on peut reprendr e


// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log('Votre position actuelle est :');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);


// avec ce code il m'affiche dans la console ma position 

// sinon en général on utlise des api géographique, mais on peut aussi utiliser du javascript vanilla