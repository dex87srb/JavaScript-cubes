/*JavaScript variables and operators*/

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

/*JS ARRAYS & LOOPS*/

console.log("JS ARRAYS & LOOPS");

/*task 1*/

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
  dataNew[dataNew.length] = dataOld[i];
}

console.log("TASK 1");
console.log(dataNew);
console.log("\n");

/*task 2*/

var dataOld1 = [34, true, "Peter", 1992];
var dataNew1 = [];

for (var i = 0; i < dataOld1.length; i++) {
  dataNew1[dataNew1.length] = dataOld1[dataOld1.length - 1 - i];
}

console.log("TASK 2");
console.log(dataNew1);
console.log("\n");

/*task 3*/

var dataOld2 = [34, true, "Peter", 1992];
var dataNew2 = [12, "Jack"];

for (var i = 0; i < dataOld2.length; i++) {
  dataNew2[dataNew2.length] = dataOld2[i];
}

console.log("TASK 3");
console.log(dataNew2);
console.log("\n");

/*task 4*/

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {
  c[c.length] = a[i];
}
for (var j = 0; j < b.length; j++) {
  c[c.length] = b[j];
}

console.log("TASK 4");
console.log(c);
console.log("\n");

/*task 5*/

var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {
  c[c.length] = a[i];
  if (b[i] != null) {
    c[c.length] = b[i];
  }
}

console.log("TASK 5");
console.log(c);
console.log("\n");

/*task 6*/

console.log("TASK 6");

for (var i = 0; i < 6; i++) {
  var str = "";
  for (var j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

console.log("\n");

/*task 7*/

console.log("TASK 7");

var numA = 6;
var numB = 10;
var alt = "";

/*Zasto variabla ako je deklarisana van petlje, u ovom slucaju da stavim
str van ili unutar funkcije, onda mi drugaciji rezultat daje? Na osnovu ovog primera sam provalio da je 
i u drugim jezicima vazi isto pravilo.
.*/

for (var i = 0; i < numA; i++) {
  var str = "";
  for (var j = 0; j < numB; j++) {
    if (i == 0 || j == 0 || i == numA - 1 || j == numB - 1) {
      str += "*";
    } else str += " ";
  }

  alt += str + "\n";
}
console.log(alt);
console.log("\n");

/*JS FUNCTIONS*/

console.log("JS FUNCTIONS");

/*task 1*/

var arrayFunction = [0, 1, 2, 3, 4];

var reverseArray = function (array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr[newArr.length] = array[array.length - 1 - i];
  }
  return newArr;
};

console.log("TASK 1");
console.log(reverseArray(arrayFunction));
console.log("\n");

/*task 2*/

function ReceiveAnyPar(any) {
  console.log(any);
}

console.log("TASK 2");
ReceiveAnyPar(typeof "Dex");
console.log("\n");

/*task 3*/

var arrayNames = ["Dex", "Max", "Lauren", "Nile"];
var newArrayName = arrayNames[0];

var longestName = function (array, newArray) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (newArray.length < array[i].length) newArray = array[i];
    }
  }
  console.log(newArray);
};

console.log("TASK 3");
longestName(arrayNames, newArrayName);
console.log("\n");

/*task 4*/

var arrayLandH = [32, 41, 5, 6, 3, 8, 39];
var lowest = arrayLandH[0];
var highest = arrayLandH[0];

function SecondLowestAndHighest(array, lowest, highest) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < lowest) lowest = array[i];
    if (array[i] > highest) highest = array[i];
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] != lowest && array[i] != highest)
      newArray[newArray.length] = array[i];
  }

  var secondHighest = newArray[0];
  var secondLowest = newArray[0];

  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] < secondLowest) secondLowest = newArray[i];
    if (newArray[i] > secondHighest) secondHighest = newArray[i];
  }

  console.log(secondLowest, secondHighest);
}

console.log("TASK 4");
SecondLowestAndHighest(arrayLandH, lowest, highest);
console.log("\n");

/*task 5*/

var arrayOfNumbers = [4, 65, 75, 78];
var providedNumber = 77;

function ProvideBiggerNumberArray(array, number) {
  CheckNumbersBigger(array, number);
}

function CheckNumbersBigger(array, number) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > number) newArray[newArray.length] = array[i];
  }
  console.log(newArray);
}

console.log("TASK 5");
ProvideBiggerNumberArray(arrayOfNumbers, providedNumber);
console.log("\n");

/*task 6*/

var arrayMaximum = [15, -2, 22, 0, 13];
var maximumAndLowNumber = arrayMaximum[0];

function MaxNum(array, maxNumber) {
  var maxNumber;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) maxNumber = array[i];
  }

  return maxNumber;
}

function LowNum(array, lowNumber) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < lowNumber) lowNumber = array[i];
  }

  return lowNumber;
}

function MultiLowAndHigh(array, maxAndLow) {
  var max = MaxNum(array, maxAndLow);
  var low = LowNum(array, maxAndLow);

  console.log(max * low);
}

console.log("TASK 6");
MultiLowAndHigh(arrayMaximum, maximumAndLowNumber);
console.log("\n");

/*task 7*/

var arrayBig = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];

function UniqueWithoutBiggestN(array) {
  var unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
  //morao da se sluzim ovom metodom, jer se nisam snasao manuelno...

  BiggestDelete(unique);
}

var BiggestDelete = function (array) {
  var biggestNum = array[0];
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > biggestNum) biggestNum = array[i];
  }

  for (var j = 0; j < array.length; j++) {
    if (array[j] !== biggestNum) {
      newArray[newArray.length] = array[j];
    }
  }

  console.log(newArray);
};

console.log("TASK 7");
UniqueWithoutBiggestN(arrayBig, BiggestDelete);
