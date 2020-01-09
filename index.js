function isAdult (age) {
    return age >= 21;
}

function sortArrayUp (arr) {
    return arr.sort((a, b) => a - b);
}

function isPalindrome (str) {
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

function isOddNumber (number) {
    return number % 2 !== 0;
}

function isEvenNumber (number) {
    return number % 2 === 0;
}

module.exports = {isAdult, isPalindrome, sortArrayUp, isOddNumber, isEvenNumber};