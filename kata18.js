const squareCode = function(message) {

  message = message.replace(/ /g, '');
  // let s = '';
  let s = [];
  let rows = Math.ceil(Math.sqrt(message.length));

  for (let j = 0; j < rows; j++) {
    s.push([]);
  }

  message.split('').forEach((char, index) => {
    s[Math.floor(index % rows)].push(char);
  });

  let s2 = '';
  s.forEach(row => {
    s2 += row.join('') + ' ';
  });
  
  return s2;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
