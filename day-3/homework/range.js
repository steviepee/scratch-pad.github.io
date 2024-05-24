// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 * I = takes two numbers
 * O = returns all integers between the two numbers from the first to the second
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //create a storage array
    var sto = [];
    //if the first number is lower
    if (start < end) {
//iterate all integers in ascending order until end
for (var i = start; i <= end; i++) { 
//push the numbers into the storage array each iteration
sto.push(i);
}
//if the first number is greater
    } else if (start > end) {
        //iterate to the end in descending order
        for (var x = start; x >= end; x--) {
            //push each number into the storage array
            sto.push(x);
        }
    
    }    //either way, return the storage array
        return sto;
    

    
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}