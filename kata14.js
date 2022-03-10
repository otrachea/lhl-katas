const calculateChange = function(total, cash) {

  const denoms = [
    {
      'name': 'twentyDollar',
      'amount': 2000
    },
    {
      'name': 'tenDollar',
      'amount': 1000
    },
    {
      'name': 'fiveDollar',
      'amount': 500
    },
    {
      'name': 'twoDollar',
      'amount': 200
    },
    {
      'name': 'oneDollar',
      'amount': 100
    },
    {
      'name': 'quarter',
      'amount': 25
    },
    {
      'name': 'dime',
      'amount': 10
    },
    {
      'name': 'nickel',
      'amount': 5
    },
    {
      'name': 'penny',
      'amount': 1
    }
  ];

  let result = {};
  let change = cash - total;
  let num = 0;

  denoms.forEach(denom => {
    num = Math.floor(change / denom.amount);
    if (num > 0) {
      result[denom.name] = num;
      change %= denom.amount;
    }
  });

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));