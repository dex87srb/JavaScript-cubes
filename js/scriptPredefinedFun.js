/*JS PREDEFINED FUNCTIONS*/

console.log("JS PREDEFINED FUNCTIONS");

/*task 1*/

var text = "Lorem ipsum dolor sit amet";

var letterLower = function (text) {
  console.log(text.toLowerCase());
};

console.log("TASK 1");
letterLower(text);
console.log("\n");

/*task 2*/

var checkWord = function (text) {
  console.log(text.includes("sit"));
};

console.log("TASK 2");
checkWord(text);
console.log("\n");

/*task 3*/

var checkWordLastIndex = function (text) {
  return text.lastIndexOf(text[text.length - 1]);
};

console.log("TASK 3");
console.log(checkWordLastIndex(text));
console.log("\n");

/*task 4*/

var firstThreeWords = function (text) {
  var positionNew = text.split(" ");
  var k = 0;

  return positionNew[k++] + " " + positionNew[k++] + " " + positionNew[k++];
};

console.log("TASK 4");
console.log(firstThreeWords(text));
console.log("\n");

/*task 5*/

var sentence = "Piter is an actor.";

var replaceWords = function (sentencePos) {
  var sentenceArray = sentencePos.split(" ");

  sentenceArray[0] = "Pitor";
  sentenceArray[sentenceArray.length - 1] = "acter";

  var newSentence = sentenceArray.join(" ");

  return newSentence;
};

console.log("TASK 5");
console.log(replaceWords(sentence));
console.log("\n");

/*task 6*/

var someData = [34, 23, 14, 56, 23, 44, 65];

var removeNumber = function (array) {
  var newArray = [];
  array.forEach(function (element) {
    if (element !== 56) newArray[newArray.length] = element;
  });

  console.log(newArray);
};

console.log("TASK 6");
removeNumber(someData);
console.log("\n");

/*task 7*/

var turnNewArray = function (array) {
  var otherDataFiltered = [];

  array.shift();

  var slicedArray2endPart = array.slice(3);
  var slicedArray1stPart = array.slice(0, 3);

  slicedArray2endPart.filter(function (element) {
    if (element === slicedArray2endPart[slicedArray2endPart.length - 3])
      otherDataFiltered[otherDataFiltered.length] =
        slicedArray2endPart[slicedArray2endPart.length - 1];
    else if (element === slicedArray2endPart[slicedArray2endPart.length - 1]) {
      otherDataFiltered[otherDataFiltered.length] =
        slicedArray2endPart[slicedArray2endPart.length - 3];
    } else otherDataFiltered[otherDataFiltered.length] = element;
  });

  var otherData = slicedArray1stPart.concat(otherDataFiltered);

  console.log(otherData);
};

console.log("TASK 7");
turnNewArray(someData);
console.log("\n");

/*task 8*/

var someData = [334, 233, 212, 199, 154, 122];

var reducedByPreviousOne = function (array) {
  var k = -1;
  var newArray = array.map(function (item) {
    k++;
    if (k > 0) return item - array[k - 1];
    else return item;
  });

  console.log(newArray);
};

console.log("TASK 8");
reducedByPreviousOne(someData);
console.log("\n");

/*task 9*/

var students = [
  {
    name: "Jim",
    avgGrade: 8.5556,
  },
  {
    name: "Mike",
    avgGrade: 8.5492,
  },
  {
    name: "Anna",
    avgGrade: 8.9322,
  },
  {
    name: "Jack",
    avgGrade: 8.6111,
  },
];

var averageGradeStudents = function (array) {
  var newArray = [];

  var i = 0;
  array.filter(function (element) {
    if (array[i].avgGrade > 8.5) {
      newArray[newArray.length] = element;
    }
    i++;
  });

  newArray.forEach(function (element) {
    element.avgGrade = element.avgGrade.toFixed(2);
  });

  console.log(newArray);
};

console.log("TASK 9");
averageGradeStudents(students);
console.log("\n");
