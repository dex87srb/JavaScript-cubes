/*JavaScript variables and operator*/

var task3 = document.getElementById("task3");

/*task 1*/

var peter = 3500;
var jim = 5000;

function Task1() {
  var task1 = document.getElementById("task1");
  if (peter > jim) task1.innerHTML = peter < jim;
  else task1.innerHTML = jim < peter;
}

/*task 2*/

var john = 38;
var counter = 8;
var result;

function Task2() {
  var task2 = document.getElementById("task2");
  var i = 0;
  var finalResult;

  while (i < 1) {
    for (i = 0; i <= counter; i++) result = john + i;
    finalResult = result / 2;
  }

  task2.innerHTML = finalResult;
}

/*task 3*/

var firstFlock = 78;
var secondFlock = 57;

function Task3() {
  var task3 = document.getElementById("task3");

  firstFlock = firstFlock - 12;
  secondFlock = secondFlock + 12 - 4;

  if (firstFlock > secondFlock)
    task3.innerHTML = "First flock is larger then the second one!";
  else if (firstFlock == secondFlock)
    task3.innerHTML = "First flock is equal to the second one!";
}

/*JS DATA TYPES & CONDITIONALS*/

/*task 1*/

var arrayMax = [15, -2, 22, 0, 13];
var max = arrayMax[0];
function MaxNumber() {
  var maxNumber = document.getElementById("maxNumber");
  for (var i = 0; i <= arrayMax.length - 1; i++) {
    if (arrayMax[i] > max) max = arrayMax[i];
  }

  return (maxNumber.innerHTML = max);
}

/*task 2*/

var arraySign = [3, -7, 2];
var max = arrayMax[0];
function DetermineSign() {
  var sign = document.getElementById("sign");
  var result = arraySign[0] * arraySign[1] * arraySign[2];

  if (result > 0) sign.innerHTML = "The result is in +";
  else sign.innerHTML = "The result is in -";
}

/*task 3*/

function LanguageDetermine() {
  var languages = document.getElementById("languageValue").value;
  var languageCheck = document.getElementById("languageCheck");
  switch (languages) {
    case "eng":
      {
        languageCheck.innerHTML = "Hello World!";
      }
      break;
    case "spa":
      {
        languageCheck.innerHTML = "Ola Mondo!";
      }
      break;
    case "ser":
      {
        languageCheck.innerHTML = "Zdravo Svete!";
      }
      break;
    case "ro":
      {
        languageCheck.innerHTML = "Salut Oameni!";
      }
      break;
    case "fra":
      {
        languageCheck.innerHTML = "Salut Monde!";
      }
      break;
  }
}

/*task 4*/

function CheckUserAge() {
  var age = document.getElementById("age");
  var userAge = 39;
  var userAgeCheck;
  userAge >= 28 ? (userAgeCheck = true) : (userAgeCheck = false);

  if (userAgeCheck === false) age.innerHTML = "User is less than 28 years old";
  else if (userAgeCheck === true) {
    if (userAge > 28) age.innerHTML = "User is older than 28";
    else age.innerHTML = "User is 28";
  }
}
