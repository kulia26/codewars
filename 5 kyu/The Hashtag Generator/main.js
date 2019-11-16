'use strict';

function generateHashtag(str) {
  str = str.trim();
  let result = '#';
  let capitalize = true;
  //console.dir(str);
  if (str === '') return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && !capitalize) result += str[i];
    if (str[i] !== ' ' && capitalize) {
      result += str[i].toUpperCase();
      capitalize = false;
    }
    if (str[i] === ' ') capitalize = true;
  }
  if (result.length > 140) return false;
  return result;
}

console.dir(generateHashtag('Codewars Is Nice') === '#CodewarsIsNice');
console.dir(generateHashtag('codewars is Nice') === '#CodewarsIsNice');
console.dir(generateHashtag('   a b c d ') === '#ABCD');
console.dir(generateHashtag('     ') === false);
console.dir(generateHashtag('') === false);
console.dir(generateHashtag('a'.repeat(139)) === '#A' + 'a'.repeat(138));
