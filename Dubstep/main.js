'use strict';

function songDecoder(song) {
  let result = '';
  let counter = 0;
  while (counter < song.length) {
    const maybeWUB = song.slice(counter, counter + 3);
    if (maybeWUB !== 'WUB') {
      result += maybeWUB[0];
      counter += 1;
    } else {
      if (result[result.length - 1] !== ' ') {
        result += ' ';
      }
      counter += 3;
    }
  }
  return result.trim();
}

console.dir(songDecoder('AWUBBWUBC') === 'A B C');
console.dir(songDecoder('AWUBWUBWUBBWUBWUBWUBC') === 'A B C');
console.dir(songDecoder('WUBAWUBBWUBCWUBWUBWUBWUBWUB') === 'A B C');
