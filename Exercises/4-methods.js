'use strict';

const methods = (object) => {
  const array = new Array();
  for (const name in object)
    if (typeof object[name] === 'function')
      array.push([name, object[name].length]);
  return array;
};

module.exports = { methods };
