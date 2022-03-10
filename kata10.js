const multiplicationTable = function(maxValue) {

  let s = '';

  for (let i = 0; i < maxValue; i++) {
    for (let j = 0; j < maxValue; j++) {
      
      s += (j + 1) * (i + 1) + ' ';

    }
    if (i != maxValue - 1) s += '\n';
  }

  return s;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));