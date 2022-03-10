const sumLargestNumbers = function (data) {

  let sum = 0;

  for (let i = 0; i < 2; i++) {

    let num1 = data[0];
    let index1 = 0;

    data.forEach((num, index) => {
      if (num > num1) {
        num1 = num;
        index1 = index;
      }
    });

    sum += num1;

    data.splice(index1, 1);
  }

  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
