'use strict';

function alphabetPosition(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const number  = text[i].toUpperCase().charCodeAt(0) - 64;
    if (number > 0 && number < 27) result += number + ' ';
  }
  return result.trim();
}

console.dir(alphabetPosition('The sunset sets at twelve o\' clock.'));
