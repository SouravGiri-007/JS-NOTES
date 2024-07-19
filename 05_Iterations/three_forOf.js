// for of loop

//'for of' on  array
const numbers = [1,2,3,4,5]

for (const nums of numbers) {
    //console.log(nums);
}
//Prints array values from 1 to 5 

/********************************************************************************************************************************** */




/*'For of' on String */
const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(`Each charracter is : ${greet}`);
}


// Map
// Creating a new map instance
const countryMap = new Map();

// Adding key-value pairs to the map
countryMap.set('IN', "India");
countryMap.set('USA', "United States");
countryMap.set('FR', "France");

// If we attempt to add the same key with a different value, such as:
// countryMap.set('IN', "Indonesia"); // It will not overwrite the existing value.

// Note: Maps maintain the order of insertion and ensure keys are unique.



/*'For of' on Map */
for (const [keys, values] /*Destructure of Array*/ of countryMap) {
    console.log(keys, '=', values);
}
/* Output: IN = India
        USA = United States
        FR = France
*/

/*********************************************************************************************** */

// For of loop doesnt work on objects
