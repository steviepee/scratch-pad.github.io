// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 * I = N/a
 * O = puts out numbers from 1-100, but with Fizz for multiples of 3, Buzz for multiples of 5, and Fizzbuzz for multiples of both
 * C = N/a
 * E = N/a
*/
function fizzBuzz() {
    // 
    // YOUR CODE GOES BELOW HERE //
//iterate over each value between 1 and 100
for (var num = 1; num <= 100; num++) {
    //if a given number is a multiple of 3 and a multiple of 5
    if (num % 3 === 0 && num % 5 === 0) {
        //print the string "FizzBuzz" into the console
        console.log("FizzBuzz");
        //if a given number is only a multiple of 3
    } else if (num  % 3 === 0) {
//print Fizz to the console
console.log("Fizz");
//if a given number is only a multiple of 5
        } else if (num % 5 === 0) {
            //print Buzz to the console
            console.log("Buzz");
            //every other number simply prints to the console
        } else {
            console.log(num);
        }
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}