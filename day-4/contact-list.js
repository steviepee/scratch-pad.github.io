// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 * I = function takes three arguments of any type
 * O = returns an object with each arguments value corresponding to a key of the same name as the parameter
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 * I = no input
 * O = returns factory function that manages contacts via specific functions in its key/value pairs
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //create factory function that places each argument into its own key/value pair in an object
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            return contacts.push(contact);
        },
        findContact: function(fullName) {
            //iterate over the array
            for (var i = 0; i < contacts.length; i++) {
                //create shorthand variable for current unnamed object in the array
                var dude = contacts[i];
                //if the quality of nameFirst and nameLast = the name we're looking for
                if (dude.nameFirst + ' ' + dude.nameLast === fullName) {
                    //push that object into the storage array
                    return dude;
                }
            }//if none of the objects match, return undefined
                return undefined;
            },
            removeContact: function(contact) {
                 //iterate over the array
            for (var i = 0; i < contacts.length; i++) {
                //create shorthand variable for current unnamed object in the array
                var dude = contacts[i];
                //if the quality of nameFirst and nameLast = the name we're looking for
                if (dude.nameFirst + dude.nameLast === contact.nameFirst + contact.nameLast)
                contacts.splice(dude, 1);
            }
        },
        printAllContactNames: function() {
             //iterate over the array
             for (var i = 0; i < contacts.length; i++) {
                //create shorthand variable for current unnamed object in the array
                var dude = contacts[i];
             }
            }

        }

    }





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}