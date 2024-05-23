// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 * I = function takes an array
 * O = function outputs the values for said array
 * C = N/a
 * E =N/a
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //iterate over each value in the array
for (var i = 0; i < array.length; i++) {
  //print each value to the console
  console.log(array[i]);

}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 * I = function takes an array
 * O = function outputs the values for said array, backwards
 * C = N/a
 * E =N/a
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //iterate over each value in the array starting from the end
  for (var r = array.length - 1; r >= 0; r--) {
    //print each value to the console
    console.log(array[r]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 * I = function takes an object
 * O = returns an array of the keys in the object
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create a storage array
  var sto = [];
  //call to the elements of the object
  for (var key in object) {
  sto.push(key);
  }
 return sto;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 * I = function takes an object
 * O = prints the objects keys into the console
 * C = NA
 * E = NA
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
 //iterate over the entire object
 for (var key in object) {
  //print keys into the console
  console.log(key);
 } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 * I = function takes an object
 * O = returns an array of all the values
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //create a storage array
  var sto = [];
  // iterate over the object
  for (var key in object) {
    //place the values into an array
    sto.push(object[key]);
  }
  //return the array
  return sto;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 * I = takes an object
 * O = prints the objects values 
 * C = must use console.log
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
   //create a storage array
   //var sto = [];
   // iterate over the object
   for (var key in object) {
     //print the values into the console
     console.log(object[key]);
   }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 * I = takes an object
 * O = returns the number of key/value pairs in the object
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create storage array
  var sto = [];
  //iterate over object
  for (var key in object) {
    //place the keys into an array. Give it a variable
   var ans = Object.keys(object);
//return the length of the array
   return ans.length;
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 * I = takes an object
 * O = prints the values in reverse order
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //create storage array
  var sto = [];
  //iterate over object
  for (var key in object) {
    //push the values into the storage array
    sto.push(object[key]);
  }
  //iterate over the array backwards
  for (var i = sto.length - 1; i >= 0; i--) {
    //print each value to the console
    console.log(sto[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}