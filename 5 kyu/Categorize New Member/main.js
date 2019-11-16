'use strict';

function openOrSenior(data) {
  return data.map(value => {
    const age  = value[0];
    const handicap  = value[1];
    if (age >= 55 && handicap > 7) {  return 'Senior'; }
    return 'Open';
  });
}

console.dir(openOrSenior([[18, 20],
  [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
