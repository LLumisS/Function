'use strict';


const ipToInt = (ip) => ip
  .split('.')
  .reverse()
  .reduce((acc, value, i) => acc + (value <<= (8 * i++)), 0);

module.exports = { ipToInt };
