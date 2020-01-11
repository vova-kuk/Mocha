function isAdult(age) {
  if (age <= 0 || typeof age !== 'number') return 'Not valid entry';
  return age >= 21;
}

function sortArrayUp(arr) {
  if (!Array.isArray(arr)) return 'Not valid entry';
  return arr.sort((a, b) => a - b);
}

function isPalindrome(str) {
  if (typeof str !== 'string') return 'Not valid entry';
  return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

function isDivisible(n, x, y) {
  if (typeof n !== 'number' || typeof x !== 'number' || typeof y !== 'number') return 'Not valid entry';
  return n % x === 0 && n % y === 0;
}

function isOddNumber(number) {
  if (typeof number !== 'number') return 'Not valid entry';
  return number % 2 !== 0;
}

function array_diff(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return 'Not valid entry';
  return a.filter(el => !b.includes(el));
}

function minSum(arr) {
  if (!Array.isArray(arr)) return 'Not valid entry';
  let sum = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    sum += arr[i] * arr[j];
  }
  return sum;
}

function duplicates(arr) {
  if (!Array.isArray(arr)) return 'Not valid entry';
  return arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el));
}

function sumDigits(n) {
  if (typeof n !== 'number') return 'Not valid entry';
  let sum = 0;
  let a = (n + '').split('');
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(+a[i])) sum += +a[i];
  }
  return sum;
}

function absentVowel(x) {
  if (typeof x !== 'string') return 'Not valid entry';
  if (!x.match(/a/)) return 0;
  if (!x.match(/e/)) return 1;
  if (!x.match(/i/)) return 2;
  if (!x.match(/o/)) return 3;
  if (!x.match(/u/)) return 4;
}

module.exports = {
  isAdult,
  sortArrayUp,
  isPalindrome,
  isDivisible,
  isOddNumber,
  array_diff,
  minSum,
  duplicates,
  sumDigits,
  absentVowel
};