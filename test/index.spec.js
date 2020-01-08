const assert = require('assert');

const {isAdult, isPalindrome, sortArrayUp, isOddNumber, isEvenNumber} = require('../index');

describe('function isAdult', () => {
    it('should function isAdult work correctly', () => {
        assert.equal(isAdult(18), false);
    })
})

describe('function isPalindrome', () => {
    it('should show is it palindrome', () => {
        assert.equal(isPalindrome('madam'), true);
    })
})

describe('function sortArrayUp', () => {
    it('should function sortArrayUp work correctly', () => {
        assert.deepEqual(sortArrayUp([4, 1, 7, 2, 0]), [0, 1, 2, 4, 7])
    });
})

describe('function isOddNumber', () => {
    it('should function isOddNumber work correctly', function () {
        assert.equal(isOddNumber(5), false)
    });
})

describe('function isEvenNumber', () => {
    it('should function isEvenNumber work correctly', function () {
        assert.equal(isEvenNumber(5), true)
    });
})




