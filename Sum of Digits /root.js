'use strict';

// eslint-disable-next-line camelcase
function digital_root(n) {
  const array = n.toString().split('');
  const sum  = array.reduce((acc, value) => parseInt(acc) + parseInt(value));
  if (sum.toString().length === 1) return parseInt(sum);
  return digital_root(parseInt(sum));
}

console.dir(digital_root(23411));
console.dir(digital_root(0))
;
