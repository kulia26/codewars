'use strict';

function permutations(string) {
  const letters = {};
  const map  = {};
  const length = string.length;
  for (let i = 0; i < length; i++) {
    const letter = string[i];
    if (letters[letter]) letters[letter] += 1;
    if (!letters[letter]) letters[letter] = 1;
  }
  console.log(letters);
}

console.dir(permutations('abc'));
