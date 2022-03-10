const camelCase = function(input) {

  let s = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      s += input[i + 1].toUpperCase();
      i++;
    } else {
      s += input[i];
    }
  }

  return s;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));