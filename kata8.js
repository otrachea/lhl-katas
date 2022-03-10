const repeatNumbers = function(data) {

  let s = '';
  data.forEach((pair, index) => {
    for (let i = 0; i < pair[1]; i++) {
      s += pair[0];
    }

    if (data[index + 1] !== undefined) s += ', ';

  });

  return s;

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));