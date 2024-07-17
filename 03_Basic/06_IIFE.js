// IIFE = Immediately Invoked Function Expressions

/*Note: A function that is invoked right away after it is defined in JavaScript is called an IIFE. Usually, it's used to isolate variables and functions so they don't contaminate the global namespace.
*/

(function One(){
    console.log(`DB  CONNECTED`);
})(); //Output: DB  CONNECTED
// Note : Using semicolon ; to end the first IIFE function

//IIFEby arrow function

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Sourav");