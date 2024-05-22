// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 * I =inputs a string
 * O = returns the strings length
 * C = N/a
 * E = N/a
 */



function length(string) {
    // YOUR CODE BELOW HERE //
//return the length of the string
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 * I = function takes a string
 * O = returns a string with all lowercased letters
 *
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
//return the string with lowercased letters
return string.toLocaleLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 * I = Function takes a string
 * O = output is a string in all uppercased letters
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//return the string in capital letters
return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 * I = Function takes a string
 * O = returns a new string forced to dash-case: case where spaces are replaced with dashes
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
//create a storage array
var stoArray =[];
  //separate the string into an array. initialize a variable for it
var stringArray = string.split('');
//iterate over each new value in the new array
for (var x = 0; x < stringArray.length; x++) {
  //check for spaces. If a space is found
  if (stringArray[x] === ' ') {
//push a dash into the storage array
stoArray.push('-');
//otherwise
  } else {
      //push the value into the storage array
      stoArray.push(stringArray[x]);
  }
  
}
    //turn the storage array into a string and return it in lower cased form
return stoArray.join('').toLowerCase();



    



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * I =Function takes one string and a character
 * O =function returns a boolean for whether the string begins with the character
 * c =case insensitive
 * e = N/A
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //first, put all the letters in the same case. Assign variables to their new forms
    var lowString = string.toLowerCase();
    var lowChar = char.toLowerCase();
//check the first letter of the lowercased string against the lowercased char. if they're the same...
if (lowString[0] == lowChar) {
    // return true
    return true;
} 
  //if not, return false  
return false;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * I = function takes a string and a single character
 * O = returns boolean of whether string ends with the letter char
 * C = case insensetive
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// create variables to lowercase both arguments
var lowerString = string.toLowerCase();
var lowerChar = char.toLowerCase();
//check to see if the lowercased char matches with the last letter of string. if it does
if (lowerChar === lowerString[string.length - 1]) {
    //return true
    return true;
    //if not, the if chain ends
}
//if the if chain ends, return false
return false;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 * I = function takes two strings
 * O = returns a melding of the two strings
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//return the strings concatenated
return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}