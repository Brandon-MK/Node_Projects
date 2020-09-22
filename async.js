const dosomethingAsync = () => {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle("I did something");
    }, 3000);
  });
};
// an async function returns a promise

const dosomething = async () => {
  console.log(await dosomethingAsync());
}; // this is how we call the async function

const aFunction = async () => {
  return "test";
};

aFunction().then(alert);
// if you use async in a function like this it will make is it return a function
// this is how it is in actual sense
const aFunction = async () => {
  return Promise.resolve("test");
};

aFunction().then(alert);
