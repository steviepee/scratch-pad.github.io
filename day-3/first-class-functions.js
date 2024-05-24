// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 * I = takes in a string or a number
 * O = returns a function to test the whether another value is greater than it
 * c = na
 * E = the values are different datatypes
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //create a function with a variable to test against the base
    return function(test) {
        //have it return a boolean of whether its greater than the base
        return base < test;
    }
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //create a functon to test against the base
return function(test) {
    //have it return a boolean of whether the test value is lower than the base
    return test < base;
}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * I = Function takes a single letter
 * O = Returns a function that tests whether a string starts with that letter
 *///C = case insensitive
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return  a function for a string to test against startswith
    return function(string) {
        //make them both lowercase
       var a = string.toLowerCase();
        var b = startsWith.toLowerCase();
        //split a into an array with a variable
var c = a.split('');
//boolean the first character of c against startsWith lowercased
return c[0] === b;  //or simply return a.startsWith(b);
    }
    
    

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * I = function takes a single letter
 * O = returns a function that tests whether a string ends with that letter
 * C = case insensitive
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //return the function that tests a string against this letter
    return function(string) {
//bring both strings to the same case w variables
var i = string.toLowerCase();
var e = endsWith.toLowerCase();
//return to see if the same cased string ends with the same cased function var
return i.endsWith(e);

    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}