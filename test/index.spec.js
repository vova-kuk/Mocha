const assert = require('assert');
const {expect} = require('chai');

const {isAdult, sortArrayUp, isPalindrome, isDivisible, isOddNumber, array_diff, minSum, duplicates, sumDigits, absentVowel} = require('../index');

describe('function isAdult', () => {
    it('should function isAdult work correctly', () => {
        //assert.equal(isAdult(21), true);
        expect(isAdult(21)).to.true;
    })
})

describe('function sortArrayUp', () => {
    it('should function sortArrayUp work correctly', () => {
        assert.deepEqual(sortArrayUp([4, 1, 7, 2, 0]), [0, 1, 2, 4, 7])
        expect(sortArrayUp([4, 1, 7, 2, 0]), [0, 1, 2, 4, 7])
    });
})

describe('function isPalindrome', () => {
    it('should show is it palindrome', () => {
        assert.equal(isPalindrome('madam'), true);
    })
})

describe('function isOddNumber', () => {
    it('should function isOddNumber work correctly', function () {
        assert.equal(isOddNumber(5), true)
    });
})






