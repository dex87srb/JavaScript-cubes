/*JS OBJECTS*/

console.log("JS OBJECTS");

/*task 1*/

var personOne = {
  name: "Mike",
  age: 28,
  married: true,
};

function changeAgeAndDelete() {
  personOne.age = 34;
  delete personOne.married;
  console.log(personOne);
}

console.log("TASK 1");
changeAgeAndDelete();
console.log("\n");

/*task 2*/

var personTwo = {
  name: "Jack",
  age: 32,
  married: true,
};

function checkChildProp() {
  if (!personTwo.children)
    personTwo.children = [
      {
        name: "Dex",
        age: 29,
        gender: "male",
      },
      {
        name: "Mack",
        age: 23,
        gender: "female",
      },
    ];

  console.log(personTwo);
}

console.log("TASK 2");
checkChildProp();
console.log("\n");

/*task 3*/

var students = [
  {
    name: "Mike",
    age: 28,
    passed: false,
  },
  {
    name: "Anna",
    age: 23,
    passed: true,
  },
  {
    name: "Jack",
    age: 32,
    passed: true,
  },
];

function checkExam() {
  if (students[0].passed === false)
    console.log(students[0].name + " didn't pass exam");
}

console.log("TASK 3");
checkExam();
console.log("\n");

/*task 4*/

var names = [];
var ages = [];
var passed = [];

function repackArray() {
  for (var i = 0; i < students.length; i++) {
    names[names.length] = students[i].name;
    ages[ages.length] = students[i].age;
    passed[passed.length] = students[i].passed;
  }

  console.log(names + "\n" + ages + "\n" + passed + "\n");
}

console.log("TASK 4");
repackArray();
console.log("\n");

/*task 5*/

var personThree = new Object(personTwo);

console.log("TASK 5");
console.log(personThree.age);
console.log("\n");

/*task 6*/

personOne.showNameAndAge = function () {
  console.log(personOne.name + " " + personOne.age);
};

console.log("TASK 6");
personOne.showNameAndAge();
console.log("\n");

/*task 7*/

var person = {};

person.createNameAgeMarried = function (name, age, married) {
  this.name = name;
  this.age = age;
  this.married = married;
};

person.createNameAgeMarried("dex", 23, true);

console.log("TASK 7");
console.log(person);
console.log("\n");

/*JS ARRAYS, FUNCTIONS & OBJECTS*/

console.log("JS ARRAYS, FUNCTIONS & OBJECTS");

/*task 1*/

var arraySub = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("TASK 1");

for (var i = 0; i < arraySub.length; i++) {
  for (var j = 0; j < arraySub[i].length; j++) {
    console.log(
      "At position " + i + " subposition " + j + " value is " + arraySub[i][j]
    );
  }
}

console.log("\n");

/*task 2*/

console.log("TASK 2");

function logNameAndAge(anyObject) {
  console.log(anyObject.name + " " + anyObject.age);
}

var arrayObjects = [
  {
    name: "Danijel",
    age: 33,
  },
  { name: "Milan", age: 23 },
  { name: "Marija", age: 35 },
];

for (var i = 0; i < arrayObjects.length; i++) {
  logNameAndAge(arrayObjects[i]);
}
