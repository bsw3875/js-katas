const mainElement = document.querySelector("main");

//  Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)
const kata1heading = document.createElement("h1");
mainElement.append(kata1heading);
kata1heading.append("kata1");
let counter1 = 1;
const limit = 20;
const kata1Result = document.createElement("h2");
while (counter1 <= limit) {
  kata1Result.append(counter1 + " ");
  mainElement.append(kata1Result);
  counter1 += 1;
}

//  Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
const kata2heading = document.createElement("h1");
mainElement.append(kata2heading);
kata2heading.append("kata2");
let counter2 = 2;
const even = 20;
const kata2Result = document.createElement("h2");
while (counter2 <= limit) {
  kata2Result.append(counter2 + " ");
  mainElement.append(kata2Result);
  counter2 += 2;
}

//  Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
const kata3heading = document.createElement("h1");
mainElement.append(kata3heading);
kata3heading.append("kata3");
let counter3 = 1;
const odd = 20;
const kata3Result = document.createElement("h2");
while (counter3 <= limit) {
  kata3Result.append(counter3 + " ");
  mainElement.append(kata3Result);
  counter3 += 2;
}

//  Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
const kata4heading = document.createElement("h1");
mainElement.append(kata4heading);
kata4heading.append("kata4");
let counter4 = 5;
const multiply = 100;
const kata4Result = document.createElement("h2");
while (counter4 <= 100) {
  kata4Result.append(counter4 + " ");
  mainElement.append(kata4Result);
  counter4 += 5;
}

//  Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
//*
const kata5heading = document.createElement("h1");
mainElement.append(kata5heading);
kata5heading.append("kata5");
let counter5 = 1;
const kata5Result = document.createElement("h2");
for (counter5 = 1; counter5 < 10.5; counter5++) {
  kata5Result.append(`${counter5 * counter5} `);
  // kata5Result.append(counter5 * counter5 + '');
  mainElement.append(kata5Result);
}

//  Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
const kata6heading = document.createElement("h1");
mainElement.append(kata6heading);
kata6heading.append("kata6");
let counter6 = 20;
const kata6Result = document.createElement("h2");
for (counter6 = 20; counter6 >= 1; counter6 -= 1) {
  kata6Result.append(counter6 + " ");
  mainElement.append(kata6Result);
}

// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)

const kata7heading = document.createElement("h1");
mainElement.append(kata7heading);
kata7heading.append("kata7");
let counter7 = 20;
const kata7Result = document.createElement("h2");
for (counter7 = 20; counter7 >= 1; counter7 -= 2) {
  kata7Result.append(counter7 + " ");
  mainElement.append(kata7Result);
}

//  Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
//*
const kata8heading = document.createElement("h1");
mainElement.append(kata8heading);
kata8heading.append("kata8");
let counter8 = 20;
const kata8Result = document.createElement("h2");
const isOdd = 1;
for (counter8 = 19; counter8 > 0; counter8 -= 2) {
  kata8Result.append(counter8 + " ");
  mainElement.append(kata8Result);
}
// //Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)

const kata9heading = document.createElement("h1");
mainElement.append(kata9heading);
kata9heading.append("kata9");
let counter9 = 5;
const kata9Result = document.createElement("h2");
for (counter9 = 100; counter9 >= 1; counter9 -= 5) {
  kata9Result.append(counter9 + " ");
  mainElement.append(kata9Result);
}

// //Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
//*
const kata10heading = document.createElement("h1");
mainElement.append(kata10heading);
kata10heading.append("kata10");
let counter10 = 1;
const kata10Result = document.createElement("h2");
for (counter10 = 10; counter10 > 0; counter10 -= 1) {
  kata10Result.append(`${counter10 * counter10} `);
  mainElement.append(kata10Result);
}

//  Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];
const kata11heading = document.createElement("h1");
mainElement.append(kata11heading);
kata11heading.append("kata11");
const kata11Result = document.createElement("h2");
for (let index = 1; index < sampleArray.length; index++) {
  if ((sampleArray[index] -= 1)) {
    kata11Result.append(sampleArray[index] + " ");
    mainElement.append(kata11Result);
  }
}

//  Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)

const kata12heading = document.createElement("h1");
mainElement.append(kata12heading);
kata12heading.append("kata12");
const kata12Result = document.createElement("h2");
for (let index = 0; index < sampleArray.length; index++) {
  if (sampleArray[index] % 2 === 0) {
    kata12Result.append(sampleArray[index] + " ");
    mainElement.append(kata12Result);
  }
}

//  Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

const kata13heading = document.createElement("h1");
mainElement.append(kata13heading);
kata13heading.append("kata13");
const kata13Result = document.createElement("h2");
for (let index = 0; index < sampleArray.length; index++) {
  if (sampleArray[index] % 2 === 1) {
    kata13Result.append(sampleArray[index] + " ");
    mainElement.append(kata13Result);
  }
}

//  Display the square of each element in sampleArray. (219961, 570025, …, 222784)
//*
const kata14heading = document.createElement("h1");
mainElement.append(kata14heading);
kata14heading.append("kata14");
const kata14Result = document.createElement("h2");
const squareAll = (element) => element ** 2;
for (let index = 0; index < sampleArray.length; index++) {
  kata14Result.append(sampleArray[index] + " ");
  mainElement.append(kata14Result);
}

//  Display the sum of all the numbers from 1 to 20.
//*
const kata15heading = document.createElement("h1");
mainElement.append(kata15heading);
kata15heading.append("kata15");
const kata15Result = document.createElement("h2");
let sampleArr = [];
for (
  let index = 0, sum = 0;
  index < sampleArr.length;
  sum += sampleArr[index++]
)
  kata15Result.append(sampleArray[index] + " ");
mainElement.append(kata15Result);

//  Display the sum of all the elements in sampleArray.
//*
const kata16heading = document.createElement("h1");
mainElement.append(kata16heading);
kata16heading.append("kata16");
const kata16Result = document.createElement("h2");
const array = [];
let total = 0;
for (const index in sampleArray) {
  total += array[index];
  // let array = [1, 2, 3, 4, 5];
  // let sum = array.reduce(function (a, b) {

  kata16Result.append(sampleArray[index] + " ");
  mainElement.append(kata16Result);
}

//  Display the smallest element in sampleArray.
//*
const kata17heading = document.createElement("h1");
mainElement.append(kata17heading);
kata17heading.append("kata17");
const kata17Result = document.createElement("h2");
const number = [];
for (let index = 0; index < number.length; index++) {
  if (number[index] < 2 === 0) {
    //newArray.push(nums[index]);
    kata17Result.append(sampleArray[index] + " ");
    mainElement.append(kata17Result);
  }
}

//  Display the largest element in sampleArray.
//*
const kata18heading = document.createElement("h1");
mainElement.append(kata18heading);
kata18heading.append("kata18");
const kata18Result = document.createElement("h2");
//const arry = [534, 939, 471];
const largest = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] > largest) {
    largest = array[index];
    kata18Result.append(`${sampleArray[index]} `);
    mainElement.append(kata18Result);

    //  citation:https://stackoverflow.com
  }
}

//  citation: Mavis Acheampong, Michael Vitolio;
//  citation:https://stackoverflow.com
