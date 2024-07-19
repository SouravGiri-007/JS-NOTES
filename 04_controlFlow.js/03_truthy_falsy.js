// Truthy and Falsy values are values that are considered true or false in a boolean context.

const userEmail = "sourav986@example.com";
if (userEmail) {
    console.log("User email found.");
} else {
    console.log("User email not found.");
} // Output: User email found.



// Note: A string in useremail is taken to be the true value in this instance.
// falsy values : false, 0, -0, BigInt's 0n, null, undefined, NaN 
// truthy values : "0", 'false', " ", [], {}, function(){}


 // Way of Checking empty Array & Object
const username = []
if (username.length === 0) {
    console.log("Array is Empty");
} // Output: Array is Empty


const useremailId = {}
if (Object.keys(useremailId).length === 0) {
    // Note: Object.keys() returns a Array of keys that's why we've used a .length property.
    console.log("Object is Empty");
} // Output: Object is Empty