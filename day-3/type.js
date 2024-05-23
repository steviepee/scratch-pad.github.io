// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 * I = function takes any value
 * O = returns a boolean of whether the value is an array
 * 
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //check if the value is an array. Return the answer
    return Array.isArray(value);
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * I = function takes all forms of information
 * O = returns boolean of whether or not the data is an object
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //if value resolves to object from typeof, and isn't a function, array or null or a Date
    if (typeof value === 'object' && value !== null && !Array.isArray(value) && !isFinite(value)) {
        //return true
        return true;
        //otherwise, return false
    } else {
        return false;
    }
    

    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 * I = takes any object
 * O = returns a boolean of whether or not the value is an array or object
 * 
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
//if the value is an array
if (Array.isArray(value)) {
    //return true.
    return true;
}// leave it here & start a whole new if 
//if value resolves to object from typeof, and isn't a function, array or null or a Date
 if (typeof value === 'object' && value !== null && !isFinite(value)) {
     //return true
     return true;
//     //otherwise, return false
 } else {
     return false;
 }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 * I = takes any datatype
 * O = returns a string of the datatype 
 * 
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //if the type is not an object
    if (typeOf value !== object) {
        //just use typeOf
        return typeOf value;
        //if it is, though
    } else {
        //check if it's an array
        if (Array.isArray(value)) {
            //if it is, return array
            return 'array';
            //if it isn't, though, see if it's a date
        } else if (isFinite(value)) {
            // if it is, return date
            return 'date';
            //if it's not those and it is null
        } else if (value === null) {
            // return null
            return 'null';
            //if it's none of those
        } else {
            //return object
            return 'object';
        }
    }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}