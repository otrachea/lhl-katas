const talkingCalendar = function(date) {
  let info = date.split('/');
  let s = '';

  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };

  s += months[info[1]] + ' ';

  if (info[2][0] !== '0') {
    s += info[2][0];
  }

  if (info[2][1] === '1') {
    s += '1st, ';
  } else if (info[2][1] === '2') {
    s += '2nd, ';
  } else if (info[2][1] === '3') {
    s += '3rd, ';
  } else {
    s += info[2][1] + 'th, '
  }

  s += info[0]

  return s;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));