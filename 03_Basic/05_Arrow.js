const user = {
    username:"Sourav",
    price: 999,

    welcomeMessage:  function(){
        console.log(`${this.username}, Wlcome to website`);
        // Note: We use the 'this' keyword when referring to the current context.
        console.log(this); // Note: Will print the current context.
    
    
    }

}

/*user.welcomeMessage() //output: Sourav, Wlcome to website
user.username = "Ram"
user.welcomeMessage() //output: Ram, Wlcome to website

// console.log(this); Output: {} Prints an empty object.

*/

function A(){
    console.log(this);
}
//A()

function B(){
    let username = "Sourav"
    console.log(this.username);
}
//B() //output: undefined

// "This" keyword only useable in object not in function



/**************************Arrow Function******************************************************************* */
//Explict Example
const One = () => { //It`s an arrow function
        let username = "Sourav"
        console.log(this.username);
}

//One() //output: Undefined

// Note: If we use console.log(this) in this arrow function, we will receive an empty {}.

//implict Example

const addtwo = (num1,num2) => num1+num2;

// console.log(addtwo(3,2));.
//Note: In implict function we dont need to use {} or return 




