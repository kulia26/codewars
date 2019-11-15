'use strict';

function incrementString(string) {
  let carry = 0;
  let inc  = 0;
  const result = [];
  if (string.length === 0) { return '1'; }
  for (let i = string.length - 1; i > -1; i--) {
    let num = parseInt(string[i]);
    if (typeof num === 'number' && inc === 0 && !isNaN(num)) {
      num++;
      if (num === 10) {
        result.unshift(0);
        carry = 1;
      } else {
        if (carry > 0) carry = 0;
        inc++;
        result.unshift(num);
      }
    } else {
      if (carry > 0) {
        result.unshift(1);
        carry = 0;
      }
      if (i === string.length - 1) {
        result.unshift(1);
      }
      result.unshift(string[i]);
    }
  }
  console.dir(result.join(''));
  return result.join('');
}


console.dir(incrementString('foobar000') === 'foobar001');
console.dir(incrementString('foo') === 'foo1');
console.dir(incrementString('foobar001') === 'foobar002');
console.dir(incrementString('foobar99') === 'foobar100');
console.dir(incrementString('foobar0099') === 'foobar0100');
console.dir(incrementString('') === '1');
console.dir(incrementString('1') === '2');
console.dir(incrementString('0001') === '0002');
console.dir(incrementString('0009') === '0010');
