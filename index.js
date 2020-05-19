function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => x / y,
  multiply: (x, y) => x * y,
};

function analyze(array) {
  let total = 0;
  let min = array[0];
  let max = array[0];
  let length = array.length;

  for (var i = 0; i < length; i++) {
    let currentElment = array[i];
    total += parseInt(currentElment, 10); //don't forget to add the base
    if (currentElment < min) min = currentElment;
    if (currentElment > max) max = currentElment;
  }

  return { average: total / length, min: min, max: max, length: length };
}

export { capitalize, reverseString , analyze , calculator };
