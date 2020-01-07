const assert = require('assert');

const {isAdult, isPalindrome} = require('../index');

describe('function', () => {
    it('should show is adult age', () => {
        assert.equal(isAdult(18), true);
    })

    it('should show is it palindrome', () => {
        assert.equal(isPalindrome('madam'), true);
    })
})


