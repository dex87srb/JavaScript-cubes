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

/*JS ARRAYS, FUNCTIONS & OBJECTS* homework*/

console.log("JS ARRAYS, FUNCTIONS & OBJECTS homework");

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

class LogNameAndAge {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(this.name + " " + this.age);
  }
}

var array = [];

array[0] = new LogNameAndAge("Danijel", 23);
array[1] = new LogNameAndAge("Milos", 20);

console.log("\n");

/*JS ARRAYS, FUNCTIONS & OBJECTS* classroom practice*/

console.log("JS ARRAYS, FUNCTIONS & OBJECTS classroom practice");

/*task 1*/

var someDataObject = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married",
};

class MakeReplicaObject {
  constructor(data) {
    this.name = data.name;
    this.lastName = data.lastName;
    this.status = data.status;
  }
}

var newObj = new MakeReplicaObject(someDataObject);

console.log("TASK 1");
console.log(newObj);
console.log("\n");

/*task 2*/

var someDataArray = [13, 45, 56, [32, 11], 27, [55, 92]];

var repackArrayInOne = function (array) {
  var newA = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      for (var j = 0; j < array[i].length; j++) {
        newA[newA.length] = array[i][j];
      }
    } else newA[newA.length] = array[i];
  }

  console.log(newA);
};

console.log("TASK 2");
repackArrayInOne(someDataArray);
console.log("\n");

/*task 3*/

var newA = [];
var newB = [];
var joinedArrays = [];
var splitFunction;

var splitInTwoArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    if (
      array[i].length > 0 &&
      array.indexOf(array[i]) < array.indexOf(array[i + 1]) //u c# bi bilo "out of boundaries exception", jer zadnja iteracija na [i+1] je veca od zadnjeg indeksa, vidim ovde radi! :)
    ) {
      for (var j = 0; j < array[i].length; j++) {
        newA[newA.length] = array[i][j];
      }
    } else
      for (var j = 0; j < array[i].length; j++) {
        newB[newB.length] = array[i][j];
      }
  }
};

var joinTwoArray = function (split) {
  return (splitFunction = function (data) {
    split(data);

    for (var i = 0; i < newA.length; i++)
      joinedArrays[joinedArrays.length] = newA[i];

    for (var i = 0; i < newB.length; i++) {
      joinedArrays[joinedArrays.length] = newB[i];
    }
    console.log(joinedArrays);
  });
};

console.log("TASK 3");
joinTwoArray(splitInTwoArray)(someDataArray);
console.log("\n");

/*task 4*/

function checkName(data) {
  //ovde nisam siguran jel se trazi da se obrise property ili value, nije definisano?!
  //should remove name from the function - jel ovo typo greska ili?
  if (data.name) {
    return function () {
      delete data.name;
    };
  } else
    return function (name) {
      data.name = name;
    };
}

checkName(someDataObject)("Peter");

console.log("TASK 4");
console.log(someDataObject);
console.log("\n");

/*task 5*/

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married",
};

console.log("TASK 5");
//should remove name from the function - jel ovo typo greska ili?
someDataObject.checkNameAndSet = function (data) {
  if (data.name) {
    data.method = (function () {
      delete data.name;
      console.log(data);

      (function (name) {
        data.name = name;
        console.log(data);
      })("Peter");
    })();
  }
};

someDataObject.checkNameAndSet(someData);
