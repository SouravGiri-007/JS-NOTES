/*Primitive Data Types
1. Non-Primitive Data Types
2.Note: This categorization is based on how data is stored and accessed in memory.

Note: JavaScript is dynamically typed.

1. Primitive Data Types: There are 7 types: String, Number, Boolean, Symbol, Null, Undefined, and BigInt. (These are passed by value.)*/

const score = 100
const scoreValue = 100.3
// Both comes into number category there is noting like float value for decimal e.t.c like other languages.
const isLoogedIn = true // Boolean
const outsideTemp = null // Null
let weather; // OR let weather = undefined // Undefined
// Symbol,
const id = Symbol('123')
const anotherId = Symbol('123') 
/* The return type for both will be the data type (Symbol) and both id & anotherId treated diffrently.
To check, */
console.log(id === anotherId); // false
const bigNumber = 23873847283748289483n // By writing n at the end it gets converted into BigInt.

/* -------------------------------------------------------------------------------------------------------

2. Reference Type (Non-Primitive) : array, objects, functions. */


// Array,
const heros = ["ironman", "spiderman", "batman"];
// Objects,
let myObj = { // We can store them into a Variable
    name: "Sourav",
    age: 21, 
} // The code inside these curly braces is object.
// Function,
const myFunction = function (){ // Defintion stored into a variable
    console.log("Hello World");
}


/* ------------------------------------------------------------------------------------------------------

Checking Data Types of all, 
Primitive, */
console.log(typeof scoreValue); // number
console.log(typeof isLoogedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof weather); // undefined
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigint

// Non Primitive,
console.log(typeof heros); // Object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function