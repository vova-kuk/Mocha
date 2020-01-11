// const assert = require('assert');
const {expect} = require('chai');

const {isAdult, sortArrayUp, isPalindrome, isDivisible, isOddNumber, array_diff, minSum, duplicates, sumDigits, absentVowel} = require('../index');

describe('function isAdult', () => {
  it('should function isAdult work correctly', () => {
    //assert.equal(isAdult(21), true);
    expect(isAdult(21)).true;
  });

  it('should function isAdult work correctly', () => {
    expect(isAdult(11)).false;
  });

  it('should function isAdult work correctly', () => {
    expect(isAdult('ten')).eq('Not valid entry');
  });

  it('should function isAdult work correctly', () => {
    expect(isAdult(-31)).eq('Not valid entry');
  });
});

describe('function sortArrayUp', () => {
  it('should function sortArrayUp work correctly', () => {
    //assert.deepEqual(sortArrayUp([4, 1, 7, 2, 0]), [0, 1, 2, 4, 7]);
    expect(sortArrayUp([4, 1, 7, 2, 0])).deep.equal([0, 1, 2, 4, 7]);
  });

  it('should function sortArrayUp work correctly', () => {
    expect(sortArrayUp([4, 1, 7, 2, 0])).deep.not.equal([4, 1, 7, 4, 0]);
  });

  it('should function sortArrayUp work correctly', () => {
    expect(sortArrayUp([])).deep.equal([]);
  });

  it('should function sortArrayUp work correctly', () => {
    expect(sortArrayUp()).equal('Not valid entry');
  });

  it('should function sortArrayUp work correctly', () => {
    expect(sortArrayUp(456)).equal('Not valid entry');
  });
});

describe('function isPalindrome', () => {
  it('should show is it palindrome', () => {
    expect(isPalindrome('madam')).true;
  });

  it('should show is it palindrome', () => {
    expect(isPalindrome('MadAm')).true;
  });

  it('should show is it palindrome', () => {
    expect(isPalindrome('кит на мор і ром ан тик')).true;
  });

  it('should show is it palindrome', () => {
    expect(isPalindrome('MambAm')).false;
  });

  it('should show is it palindrome', () => {
    expect(isPalindrome(456)).equal('Not valid entry');
  });

  it('should show is it palindrome', () => {
    expect(isPalindrome()).equal('Not valid entry');
  });
});

describe('function isDivisible', () => {
  it('should show is it number n is divisible by two numbers x AND y', () => {
    expect(isDivisible(10,5,2)).true;
  });

  it('should show is it number n is divisible by two numbers x AND y', () => {
    expect(isDivisible(15,3,4)).false;
  });

  it('should function isDivisible work correctly', () => {
    expect(isDivisible(15,3)).equal('Not valid entry');
  });

  it('should function isDivisible work correctly', () => {
    expect(isDivisible(20, 'two','five')).equal('Not valid entry');
  });
});

describe('function isOddNumber', () => {
  it('should function isOddNumber work correctly', function () {
    expect(isOddNumber(5)).true;
  });

  it('should function isOddNumber work correctly', function () {
    expect(isOddNumber(-11)).true;
  });

  it('should function isOddNumber work correctly', function () {
    expect(isOddNumber(10)).false;
  });

  it('should function isOddNumber work correctly', function () {
    expect(isOddNumber()).equal('Not valid entry');
  });

  it('should function isOddNumber work correctly', function () {
    expect(isOddNumber([7])).equal('Not valid entry');
  });
});

describe('function array_diff', () => {
  it('should function array_diff work correctly', () => {
    expect(array_diff([4, 1, 7, 2, 0],[1, 2])).deep.equal([4, 7, 0]);
  });

  it('should function array_diff work correctly', () => {
    expect(array_diff([4, 11, 8, 1, 7, 12, 0],[7, 12, 2])).deep.not.equal([4, 2, 4, 0]);
  });

  it('should function array_diff work correctly', () => {
    expect(array_diff([4, 11, 8, 1, 7, 12, 0],7)).equal('Not valid entry');
  });

  it('should function array_diff work correctly', () => {
    expect(array_diff([4, 11, 8, 1, 7, 12, 0])).equal('Not valid entry');
  });
});

describe('function minSum', () => {
  it('should function minSum work correctly', () => {
    expect(minSum([5, 4, 1, 7, 2, 0])).equal(13);
  });

  it('should function minSum work correctly', () => {
    expect(minSum([5, 4, 1, 7, 2, 0])).not.equal(20);
  });

  it('should function minSum work correctly', () => {
    expect(minSum()).equal('Not valid entry');
  });

  it('should function minSum work correctly', () => {
    expect(minSum(572)).equal('Not valid entry');
  });
});

describe('function duplicates', () => {
  it('should function duplicates work correctly', () => {
    expect(duplicates([4, 1, 7, 2, 1, 0, 4, 7, 0])).deep.equal([1, 4, 7, 0]);
  });

  it('should function duplicates work correctly', () => {
    expect(duplicates([4, 1, 8, 2, 1, 0, 1, 7, 0])).deep.not.equal([8, 4, 7, 0]);
  });

  it('should function duplicates work correctly', () => {
    expect(duplicates([])).deep.equal([]);
  });

  it('should function duplicates work correctly', () => {
    expect(duplicates()).equal('Not valid entry');
  });

  it('should function duplicates work correctly', () => {
    expect(duplicates(777)).equal('Not valid entry');
  });
});

describe('function sumDigits', () => {
  it('should function sumDigits work correctly', () => {
    expect(sumDigits(578)).equal(20);
  });

  it('should function sumDigits work correctly', () => {
    expect(sumDigits(1578)).not.equal(20);
  });

  it('should function sumDigits work correctly', () => {
    expect(sumDigits('578')).equal('Not valid entry');
  });

  it('should function sumDigits work correctly', () => {
    expect(sumDigits()).equal('Not valid entry');
  });
});

describe('function absentVowel', () => {
  it('should function absentVowel work correctly', () => {
    expect(absentVowel('Bb Smith sent us six neatly arranged range bicycles')).not.equal(1);
  });

  it('should function absentVowel work correctly', () => {
    expect(absentVowel('Bb Smith sent us six neatly arranged range bicycles')).equal(3);
  });

  it('should function absentVowel work correctly', () => {
    expect(absentVowel()).equal('Not valid entry');
  });

  it('should function absentVowel work correctly', () => {
    expect(absentVowel(['Mamba'])).equal('Not valid entry');
  });
});

