// setting the time code should run

function dosomething() {
  console.log("Doing Something");
}

setTimeout(() => {
  dosomething();
}, 1000);
//it will make the dosomething function run after one second

setInterval(() => {
  dosomething();
}, 2000);
// This will run the dosomething function every 2 seconds infinitely
