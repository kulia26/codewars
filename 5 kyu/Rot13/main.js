'use strict';

function rot13(message) {
  let result = '';
  for (let i = 0; i < message.length; i++) {
    const symbol = message[i];
    const code  = symbol.charCodeAt(0) - 64;
    if (code > 0 && code < 27) {
      const reverse = code < 14 ? code + 13 : code - 13;
      result += String.fromCharCode(reverse + 64);
    } else
    if (code > 32 && code < 59) {
      const reverse = code < 46 ? code + 13 : code - 13;
      result += String.fromCharCode(reverse + 64);
    } else {
      result += String.fromCharCode(code + 64);
    }
  }
  console.dir(result);
  return result;
}


console.dir(rot13('tes t') === 'grf g');
console.dir(rot13('Test!@') === 'Grfg!@');
