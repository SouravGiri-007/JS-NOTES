/* Control Flow

In previous examples, we observed that our code executed regardless of conditions. However, 
we often need to execute code based on specific conditions, known as Control or Logic Flow. */

/* Comparison Operators
<, > : Less than, greater than. Example: 3 < 5
<=, >= : Less than or equal to, greater than or equal to. Example: 7 <= 7
== : Checks for equality. Example: 4 == "4"
!= : Checks for inequality. Example: 6 != 8
=== : Checks for strict equality (including data type). Example: 10 === "10"
!== : Checks for strict inequality (including data type). Example: 9 !== "9"
*/



// If Statement
const userIsAuthenticated = true;
if (userIsAuthenticated) {
    // console.log("Welcome, you are logged in.");
} // Output: Welcome, you are logged in.

// Else Statement
const currentTemperature = 45;
if (currentTemperature < 40) {
    // console.log("It's colder than 40 degrees.");
} else {
    // console.log("It's warmer than 40 degrees.");
} // Output: It's warmer than 40 degrees.


// Block Scope
const score = 100;
if (score === 100) {
    let ability = "invisible";
}
// console.log(`Ability: ${ability}`);
/* Throws an error because 'ability' is not defined outside the block.
*/


// Short-Hand
const funds = 300;
if (funds > 200) console.log("Funds are greater than 200");


// Nesting
const amount = 850;
if (amount < 400) {
    console.log("Less than 400");
} else if (amount < 600) {
    console.log("Less than 600");
} else {
    console.log("Less than 1000");
} // Output: Less than 1000


// Logical Operators (Checks multiple conditions)
const isUserAuthenticated = true;
const hasCreditCard = true;
const signedInWithFacebook = false;
const signedInWithEmail = true;

// && (AND)
if (isUserAuthenticated && hasCreditCard /* && 5 > 1 */) /* both conditions must be true */ {
    console.log("Access granted for shopping.");
} // Output: Access granted for shopping.
// Note: No condition should be false.

// || (OR)
if (signedInWithEmail || signedInWithFacebook /* || false */) /* at least one condition must be true */ {
    console.log("User successfully logged in.");
} // Output: User successfully logged in


