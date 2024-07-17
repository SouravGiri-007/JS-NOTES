function one(){
    const username = "Sourav"

    function two(){
        const website = "Instagram"
        console.log(username);
        // note :function two has access to function one`s variables
    }
    //console.log(website);//output: error
    //note: we cant access website variable .. because it is outside of function two

    two()
}

one()

//Output: Sourav

/*Note: A child in a nested function has access to the parent variables

*********************************************************************************************************/


if(true){
    const username = "Sourav"
    if(username === "Sourav"){
        const website = " Instagram"
        console.log(username + website);

        // We can access username variable in child if statement.
        // console.log(website); // Output: Error
         // Note: We cannot access website variable outside the scope.
    }
}

// console.log(username); // Output: Error
// Note: We cannot access username variable outside the scope.
/* Output: Sourav Youtube 

*****************************Interesting**********************************************************

Hosting*/


console.log(addone(5));

function addone (num) {
    return num + 1
} // Output: 6


// console.log(addtwo(5));

const addtwo = function (num){
    return num + 2
} // Output: error


