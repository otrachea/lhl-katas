const conditionalSum = function(values, condition) {
  
  let sum = 0;
  let test = (condition === "even") ? 0 : 1;

  values.forEach(num => {
    if (num % 2 === test) sum += num;
  });
  
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));