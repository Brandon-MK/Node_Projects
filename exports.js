var car = {
  brand: "Ford",
  model: "Fiesta",
};

// one way to export
module.exports = car;
// either
exports.car = car;
// or directly
exports.car = {
  //........
};
