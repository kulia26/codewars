'use strict';

function isValidWalk(walk) {
  const map = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  const lengths = [];
  walk.forEach(side => {
    map[side] += 1;
  });
  if (map.n > 0 && map.s > 0) { map.n = -map.n; }
  if (map.w > 0 && map.e > 0) { map.w = -map.w; }

  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const length = map[key];
      lengths.push(length);
    }
  }

  console.log(map);
  const distanse = lengths.reduce((acc, val) => acc + val);
  const way = lengths.reduce((acc, val) => Math.abs(acc) + Math.abs(val));

  if (Math.abs(distanse) !== 0) return false;
  if (way !== 10) return false;
  return true;

}


console.dir(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.dir(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.dir(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

