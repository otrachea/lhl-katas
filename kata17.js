const urlDecode = function(text) {

  let temp = '', key = '', value = '';
  let result = {};


  for (let i = 0; i < text.length; i++) {
    if (text[i] === '=') {
      key = temp;
      temp = '';
    } else if (text[i] + text[i + 1] + text[i + 2] === '%20') {
      temp += ' ';
      i += 2;
    } else if (text[i] === '&' || text[i + 1] === undefined) {
      temp += text[i];
      value = temp;
      result[key] = value;
      temp = '';
    } else {
      temp += text[i];
    }
  }

  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
