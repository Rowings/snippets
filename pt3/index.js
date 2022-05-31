// rappel type de donées

let string = "chaine";
let number = 20;
let boolean = true;
let maVariable; // type Undefined

//Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];

//console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// console.log(objet.age);
// console.log(objet.technos[0][1]);

objet.adresse = "22 rue du code";

// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 36,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 42,
    technos: ["Php", "RPython", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Antoine",
    age: 33,
    technos: ["CSS", "React", "MySql"],
    admin: false,
  },
];

// console.log(data[2].pseudo);

//-----------------------------

// Les structures de controle

//----------------------------
if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + " est plus agée que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// if (valeur à tester) valeur si vrai --> ou juste comme ça aussi pour une seule
// else
// valeur si faux  ---> également utiliser quand on à que deux valeurs à tester

// valeur à tester ? si vrai : si faux  ---> ceci est une térnaire utilisé lorsqu'on à une seul conditions

data[1].age < data[0].age ? console.log("plus jeune") : console.log("plus agé");

// while

let w = 0;

while (w < 10) {
  w++;
  //   console.log("la valeur est : " + w);
}

// Do while

let d = 0;

do {
  d++;
  console.log(d);
} while (d < 5);

// Les boucles for

for (const user of data) {
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans </li>`;
}

// on déclare la valeur de i, tant qu'elle n'y est pas, elle exectue la boucle, à chaque fois en incrémentant 1 tant que la condition n'est pas rempli

for (i = 0; i < data.length; i++) {
  console.log(data[i].technos[0]);
  document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}

// Les switch

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "blue";
      break;
    case "python":
      document.body.style.background = "violet";
      break;
      default:
      null;
  }
});
