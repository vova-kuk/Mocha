This project is for practice how to write unit test cases using Mocha and Chai in a NodeJS application. 
Just to give a basic introduction of other these libraries, Mocha is a feature-rich JavaScript 
test framework running on Node.js and in the browser. Chai is an assertion library for node.

Chai

To make equality checks or compare expected results against actual results we can use Node.js
built-in assertion module. However, when an error occurs the test cases will still pass. 
So Mocha recommends using other assertion libraries and for this tutorial, we will be using Chai.

Chai exposes three assertion interfaces: expect(), assert() and should(). 
Any of them can be used for assertions.

Setup
Install Nodejs 
Install Mocha by running the command: 
$ npm install --global mocha,
$ npm install --save-dev mocha
Install Chai by running the command:
$ npm install --save-dev chai
Run npm test to run all test specs.

Function isAdult is to checks age, is it adult.

Function sortArrayUp is to sort a given array to up.

Function isPalindrome is to checks if a given string (case insensitive) is a palindrome.

Function isDivisible is to checks if a number n is divisible by two numbers x AND y.

Function isOddNumber is to checks if a number is odd.

Function array_diff is to implement a difference function, which subtracts one list from another and 
returns the result. It should remove all values from list a, which are present in list b.

Function minSum is to Find the minimum sum which is obtained from summing each Two integers product.

Function duplicates is to find the duplicates in that array, and return a new array of those duplicates. 
The elements of the returned array should appear in the order when they first appeared as duplicates.

Function sumDigits is to takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

Function absentVowel is to figure out the index of which vowel is missing from a given string.
A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
