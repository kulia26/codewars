'use strict';

function wave(string) {
  const result = [];
  string = string.trim();
  const array = string.split('');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
    if (array[i] !== ' ')result.push(array.join(''));
    array[i] = array[i].toLowerCase();
  }
  console.log(result);
  return result;
}

console.dir(wave('hello') === ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);

