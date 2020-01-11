// const assert = require('assert');
const {expect} = require('chai');

const {isAdult, sortArrayUp, isPalindrome, isDivisible, isOddNumber, array_diff, minSum, duplicates, sumDigits, absentVowel} = require('../index');

describe('function isAdult', () => {
  it('should function isAdult work correctly', () => {
    //assert.equal(isAdult(21), true);
    expect(isAdult(21)).true;
  });
});

describe('function sortArrayUp', () => {
  it('should function sortArrayUp work correctly', () => {
    //assert.deepEqual(sortArrayUp([4, 1, 7, 2, 0]), [0, 1, 2, 4, 7]);
    expect(sortArrayUp([4, 1, 7, 2, 0])).deep.equal([0, 1, 2, 4, 7]);
  });
});

describe('function isPalindrome', () => {
  it('should show is it palindrome', () => {
    expect(isPalindrome('madam')).true;
  });
});

describe('function isDivisible', () => {
  it('should show is it number n is divisible by two numbers x AND y', () => {
    expect(isDivisible(10,5,2)).true;
  });
});

describe('function isOddNumber', () => {
  it('should function isOddNumber work correctly', function () {
    expect(isOddNumber(5)).true;
  });
});

describe('function array_diff', () => {
  it('should function array_diff work correctly', () => {
    expect(array_diff([4, 1, 7, 2, 0],[1, 2])).deep.equal([4, 7, 0]);
  });
});

describe('function minSum', () => {
  it('should function minSum work correctly', () => {
    expect(minSum([5, 4, 1, 7, 2, 0])).equal(13);
  });
});

describe('function duplicates', () => {
  it('should function duplicates work correctly', () => {
    expect(duplicates([4, 1, 7, 2, 1, 0, 4, 7, 0])).deep.equal([1, 4, 7, 0]);
  });
});

describe('function sumDigits', () => {
  it('should function sumDigits work correctly', () => {
    expect(sumDigits(578)).equal(20);
  });
});

describe('function absentVowel', () => {
  it('should function absentVowel work correctly', () => {
    expect(absentVowel('Bb Smith sent us six neatly arranged range bicycles')).equal(3);
  });
});