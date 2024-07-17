/*Observation: {} In many programming languages, this curly brace is referred to as scope.
It is within the scope of that function, loop, conditional e.t.c., for example, function {}, if {},else {}, for {} e.t.c.
Note: {} Curly braces in Object is Object Declaration. */

if (true) { // (true) states that we will go inside this if statement.
    let a = 10
    const b = 20
    var c = 30
}
// Note: The declared variables in "{}" should not exceed "}"
// console.log(a); // Throw an error that 'a' is not defined
// console.log(b); // Throw an error that 'b' is not defined
// Note: It is good that variable a & b are not going outside the scope.
// console.log(c); // Output: 30
/* Note: This 30 should not come outside. That's the problem of var keyword.

***************************************************************************************************************/

//global Scope

let a = 1000;
const b = 2000;
var c=3000;

// block scope

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

console.log(a); // Output: 100
console.log(b); // Output: 200
console.log(c); // output: 30



