// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: MY FIRST TEST
 * 
 * The point of this little exercise is to get you familar with how we role with 
 * working on and submitting assignments. You'll code, save, and check the tests.
 * You can preview the index html file to see all the tests that are currently passing
 * or failing. Save your code and hit the refresh button to see the current failing 
 * or passing test update.
 */

/** 
 * Given an input value, print the value to the screen using console.log().
 * I = Takes any input 
 * O = prints input into console
 * C =N/a
 * E =N/a
 */



function print(value) {
  // YOUR CODE BELOW HERE //
  //return printed input into the console
  return console.log(value);

  
  // YOUR CODE ABOVE HERE //
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.print = print;
}