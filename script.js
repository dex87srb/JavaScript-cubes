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
  var finalResult;

  firstFlock = firstFlock - 12;
  secondFlock = secondFlock + 12 - 4;

  if (firstFlock > secondFlock)
    task3.innerHTML = "First flock is larger then the second one!";
  else if (firstFlock == secondFlock)
    task3.innerHTML = "First flock is equal to the second one!";
}
