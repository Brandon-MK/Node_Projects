// Accept input from a user from the command line

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your name!", (name) => {
  console.log(`Hello, ${name}`);
  readline.close();
});
