const camelCase = input => {
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

const pascal = input => {
  input = camelCase(input);
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const snakeKebabHelper = (input, type) => {
  let s = '';
  input.split('').forEach(char => {
    if (char === ' ') {
      (type === 'snake') ? s += '_' : s += '-';
    } else s += char;
  });
  return s;
};

const title = input => {
  input = input.charAt(0).toUpperCase() + input.slice(1);

  for (let i = 1; i < input.length; i++) {
    if (input.charAt(i - 1) === ' ') {
      input = input.slice(0, i) + input.charAt(i).toUpperCase() + input.slice(i + 1);
    }
  }

  return input;
};

const vowelConsonant = (input, type) => {
  for (let i = 0; i < input.length; i++) {
    if (type === 'vowel') {
      if (!('aieou'.includes(input.charAt(i)))) {
        input = input.slice(0, i) + input.charAt(i).toUpperCase() + input.slice(i + 1);
      }
    } else {
      if (!('aieou'.includes(input.charAt(i)))) {
        input = input.slice(0, i) + input.charAt(i).toUpperCase() + input.slice(i + 1);
      }
    }
  }
  return input;
};

const makeCase = (input, case1) => {

  if (input.length === 0) return input;

  let s = input.trim();
  let cases = [];
  ((typeof case1) === "object") ? cases = case1 : cases.push(case1);

  if (cases.includes('camel')) s = camelCase(s);
  else if (cases.includes('pascal')) s = pascal(s);
  else if (cases.includes('snake')) s = snakeKebabHelper(s, 'snake');
  else if (cases.includes('kebab')) s = snakeKebabHelper(s, 'kebab');
  else if (cases.includes('title')) s = title(s);

  if (cases.includes('vowel')) s = vowelConsonant(s, 'vowel');
  else if (cases.includes('consonant')) s = vowelConsonant(s, 'else');

  if (cases.includes('upper')) s = s.toUpperCase();
  else if (cases.includes('lower')) s = s.toLowerCase();

  return s;

};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));