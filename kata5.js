const urlEncode = function(text) {

  let s = '';

  text.trim().split('').forEach(char => {
    if (char === ' ') {
      s += '%20';
    } else {
      s += char;
    }
  });

  return s;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
