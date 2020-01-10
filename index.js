function isAdult (age) {
    return age >= 21;
}

function sortArrayUp (arr) {
    return arr.sort((a, b) => a - b);
}

function isPalindrome (str) {
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

function isOddNumber (number) {
    return number % 2 !== 0;
}

function array_diff(a, b) {
    return a.filter(el => !b.includes(el));
}

function minSum(arr) {
    let sum = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        sum += arr[i] * arr[j];
    }
    return sum;
}

function duplicates(arr) {
    return arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el));
}

function sumDigits(n) {
    let sum = 0;
    let a = (n + '').split('');
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(+a[i])) sum += +a[i];
    }
    return sum;
}

function absentVowel(x){
    if (!x.match(/a/)) return 0;
    if (!x.match(/e/)) return 1;
    if (!x.match(/i/)) return 2;
    if (!x.match(/o/)) return 3;
    if (!x.match(/u/)) return 4;
}

module.exports = {isAdult, sortArrayUp, isPalindrome, isDivisible, isOddNumber, array_diff, minSum, duplicates, sumDigits, absentVowel};