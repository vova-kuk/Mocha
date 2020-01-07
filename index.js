function isAdult (age) {
    return age >= 18;
}

function sortArrayUp (arr) {
    return arr.sort((a, b) => a - b);
}

function isPalindrome (str) {
    let reverse = str.split('').reverse().join('');
    return str.split('').reverse().join('') === str;
}

module.exports = {isAdult, isPalindrome};