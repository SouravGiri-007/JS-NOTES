
//example of rest operator

function calculatecartPrice(...num1){
    return num1;
}

//console.log(calculatecartPrice(200 , 300,400)); //[ 200, 300, 400 ]

// if I send parameter like this 
function calculatecartPrice(var1, var2 ,...num1){
    return num1;
}

// console.log(calculatecartPrice(200 , 300,400,7200)); //[ 200, 300, 400 ]
// 200&300 will go into val1,val2... rest values will go into num1 as spread operator


/****************************************************************************************************** */

// function with object

const user= {
    username: "Sourav",
    price: 199
}

function handobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handobject(user) // output: Username is Sourav and price is 199

//also you can use

handobject({
    username: "Sourav",
    price: 3040
}) // Username is Sourav and price is 3040


/*-------------------------------------------------------------------------------------

Function with Array, */
const myNewArr = [200, 300, 400, 500]

function returnSecondValue(getArr){
    return getArr[1];
}
console.log(returnSecondValue(myNewArr)); /* Output: 300
We can directly pass Array here, */
console.log(returnSecondValue([300, 400, 500, 600])); // Output: 400