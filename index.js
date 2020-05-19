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


function caesar(text, shift) {
  let result = '';

  for (let i = 0; i < text.length; i += 1) {
    const character = text.charCodeAt(i);
    if (character >= 65 && character <= 90) {
      result += String.fromCharCode(((character - 65 + shift) % 26) + 65);
    } else if (character >= 97 && character <= 122) {
      result += String.fromCharCode(((character - 97 + shift) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }

  return result;
}

export {
  capitalize, reverseString, analyze, calculator, caesar,
};
