'use strict';

function order(words) {
  if (order === '') return order;
  words = words.split(' ');
  const output = [];

  const findNumber = word => {
    let result = -1;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (parseInt(letter)) result = parseInt(letter);
    }
    return result;
  };

  for (let i = 0; i < words.length; i++) {
    output[findNumber(words[i]) - 1] = words[i];
  }
  return output.join(' ');
}

console.dir(order('is2 Thi1s T4est 3a') === 'Thi1s is2 3a T4est');
console.dir(order('') === '');
