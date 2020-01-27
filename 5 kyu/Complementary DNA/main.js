'use strict';

function DNAStrand(dna) {
  return dna.split('').map(l => {
    if (l === 'A') return 'T';
    if (l === 'T') return 'A';
    if (l === 'C') return 'G';
    if (l === 'G') return 'C';
  }).join('');
}
console.dir(DNAStrand('AAAA'));
