/*JS BOM*/

console.log("JS BOM");

/*task 1*/

var onlineBrowser = function () {
  if (navigator.onLine) {
    console.log("online");
  } else {
    console.log("offline");
  }
};

console.log("TASK 1");
onlineBrowser();
console.log("\n");

/*task 2*/

var reloadPage = function () {
  location.reload();
  document.getElementById("reload").innerHTML = "Reloading";
}; //ovde sam koristio DOM samo da bi prikazao da reload radi, a u ostalim
//taskovima je koriscen DOM radi realnijeg prikaza :)

console.log("TASK 2");
console.log("\n");

/*task 3*/

var searchURL = function () {
  setTimeout(function () {
    location.href = "https://www.google.com";
  }, 3000);
};

console.log("TASK 3");
//searchURL();
console.log("\n"); //Ovo bi mogao da resim kada bi napravio skriptu za automatsko testiranje( Selenium - web driver), pa da automatski vrtim stranice
//Ili mozda da se nakaci na neki server i saljes request-ove da browser vrti stranice?

/*task 4*/

var i = 0;

function intervalNum() {
  var repeatPrint = setInterval(function () {
    console.log(i);

    i === 15 ? clearInterval(repeatPrint) : i++;
  }, 1000);
}

console.log("TASK 4");

/*task 5*/

var randomNum = function () {
  var num = Math.random();
  var numRound = Math.round(num);
  return numRound;
};

var executeRandom = function (randomNumber) {
  var randomNum = document.getElementById("randomNum");
  randomNum.innerHTML = randomNumber();
};

/*task 6*/

var arrayObj = [
  {
    name: "Peter",
    age: 23,
    status: "inactive",
  },
  { name: "Sam", age: 22, status: "inactive" },
  { name: "Johnny", age: 21, status: "inactive" },
  { name: "Joe", age: 20, status: "inactive" },
  { name: "Lorry", age: 33, status: "inactive" },
];

var question = function (active, array) {
  var nameQuestion = prompt("What's your name ?");

  if (nameQuestion !== null) active(nameQuestion, array);
};

function activeUser(name, array) {
  for (var i = 0; i < array.length; i++) {
    if (name !== array[i].name) {
      console.log("User with name " + name + " doesn't exist.");
      break;
    } else if (name === array[i].name) {
      localStorage.setItem("loggedInUser", name);
      localStorage.setItem("name", name);
      localStorage.setItem("age", name);
      localStorage.setItem("status", "active");
      break;
    } //jel se ovo trazilo, da se kopira objekat u OBJECT?
  }

  setTimeout(function () {
    localStorage.clear();
    console.log("User is logged out!");
  }, 60000);
}
