'use strict';

function findUniq(arr) {
  const map = {};
  let result;
  arr.forEach((el, index) => {
    if (!map[JSON.stringify(el) + typeof el]) {
      map[JSON.stringify(el) + typeof el] = 1;
      result = index === 0 ? 0 : index;
    }
  });
  return arr[result];
}


console.dir(findUniq([ {}, 1, 1, 1, 1, 1 ]));
console.dir(findUniq([ 4, 4, 'foo', 4 ]));
