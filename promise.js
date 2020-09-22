const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here is the thing i bulit";
    resolve(workDone);
  } else {
    const stillWorking = "Still working ont it";
    reject(stillWorking);
  }
});
// this tells whether the work is done or not

const checkIfItsDone = () => {
  isItDoneYet
    .then((ok) => {
      console.log(ok);
    })
    .catch((err) => {
      console.log(err);
    });
};
// this checks whether its done

const status = (response) => {
  if (response.status >= 200 && response.status > 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

const json = (response) => response.json();

fetch("/todos.json")
  .then(status)
  .then(json)
  .then((data) => {
    console.log("Requested suceed with JSON response", data);
  })
  .catch((err) => {
    console.log("Request failed", err);
  });
// Helps tell if the status is good and if the todos.json has been fetchd

const f1 = fetch("/something.json");
const f2 = fetch("/something2.json");

Promise.all([f1, f2])
  .then((res) => {
    console.log("Array of results", res);
  })
  .catch((err) => {
    console.error(err);
  });
// this simplifies the creating of promises with just promise.all

const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "first");
});
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "second");
});

Promise.race([first, second]).then((result) => {
  console.log(result); // second
});
// Promise.race() helps see which promise runs first
