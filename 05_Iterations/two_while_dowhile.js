// While Loop

let index = 1; // Variable Initialization

while (index <= 15) { // Condition Check
    console.log(`Current index value: ${index}`);
    index += 3; // Increment
}



// Array in While Loop
{
let myArr = ["IronMan", "Thor", "Captain America"];
let index = 0; // Array indexing starts from 0

while (index < myArr.length) { // Length of myArr: 3
    console.log(myArr[index]);
    index++;
}
}


/* -----------------------------------------------------
Do While Loop
Used in rare cases 
*/

let score = 1;

do {
    console.log(`Current score: ${score}`);
    score++;
} while (score <= 10);


