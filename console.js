const chalk = require("chalk");
const ProgressBar = require("progress");

console.log("My name is %s ,and i am %d years", "Brandon", 16);

// %s - format variable for a string
// %d - format variable for a number
// %i - format variable for an integer
// %o - format variable for an object

//-------------------------------------------------------------------------------------------------

const x = 1;
const y = 2;
const z = 3;
console.count(
  "The value of x is " + x + " and has been checked .. how many times?"
);
console.count(
  "The value of x is " + x + " and has been checked .. how many times?"
);
console.count(
  "The value of y is " + y + " and has been checked .. how many times?"
);

// console.count() counts how many times an element has been logged

//-------------------------------------------------------------------------------------------------

const oranges = ["orange", "orange"];
const apples = ["just one apple"];
oranges.forEach((fruit) => {
  console.count(fruit);
});
apples.forEach((fruit) => {
  console.count(fruit);
});
// can also be used to count items

//-------------------------------------------------------------------------------------------------

const doSomething = () => console.log("test");
const measureDoingSomething = () => {
  console.time("doSomething()");
  //do something, and measure the time it takes
  doSomething();
  console.timeEnd("doSomething()");
};
measureDoingSomething();
// console.time() measures how long a functions takes to run

//-------------------------------------------------------------------------------------------------

console.log("\x1b[33m%s\x1b[0m", "hi!");

// Coloring console output with escape sequences or using chalk

console.log(chalk.yellow("Hello"));

//-------------------------------------------------------------------------------------------------

//You can also log a progress bar in the console using progress
const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
