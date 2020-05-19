function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
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
  const { length } = array;

  for (let i = 0; i < length; i += 1) {
    const currentElment = array[i];
    total += parseInt(currentElment, 10);
    if (currentElment < min) min = currentElment;
    if (currentElment > max) max = currentElment;
  }

  return {
    average: total / length, min, max, length,
  };
}

export {
  capitalize, reverseString, analyze, calculator,
};
