'use strict';

function findNb(m) {
  let result = 0;
  let counter = 0;
  while (result < m) {
    counter++;
    result += counter ** 3;
  }
  if (result === m) return counter;
  return -1;
}

console.dir(findNb(4183059834009) === 2022);
console.dir(findNb(24723578342962) === -1);
console.dir(findNb(135440716410000) === 4824);
console.dir(findNb(40539911473216) === 3568);
console.dir(findNb(1) === 1);
