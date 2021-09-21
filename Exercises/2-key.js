'use strict';

const generateKey = (length, characters) => {
  let res = '';
  const letters = characters.split('');
  for (let i = 0; i < length; i++) {
    res += letters[Math.floor(Math.random() * characters.length)];
  }
  return res;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);

module.exports = { generateKey };
