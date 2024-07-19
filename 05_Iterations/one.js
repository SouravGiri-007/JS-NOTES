// for Loop

for (let i = 1; i <= 20 /* "<=" included 20 */; i++) {
    const element = i;
    console.log(element);
}
// Output: Will print numbers from 1 to 20.



/*
(i) i = 1: Variable initialization.
(ii) i <= 10: Condition check. If true, the code inside {} executes.
(iii) i++: Increment operation.
(iv) If the condition is false, it exits the {} and continues from line 8.
*/

/* console.log(element); Output: error | Due to block scope.


*****************************************************************************************************/

// if statment inside for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
} 
/* Output: 
   Prints numbers from 1 to 4, then when it reaches 5, it prints "5 is the best number" 
   followed by 5, and continues to print numbers from 6 to 10.
*/

// **********************************************************************************************************

// Loop inside Loop

for (let i = 3; i <= 12; i++) {
    console.log(`Multiplication Table of ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// Output: It will print multiplication tables from 3 to 12.

/* Note: In the above code, for each iteration of the outer loop, the inner loop executes 10 times.
*/


/*************************************************************************************************************************** */

//Array with Loops 

let myArr = ["IronMan", "Thor", "Captain America"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

/**************************************************************************************************************************************/

// Break & Continue Keywords

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected 5");
        // break 
        // Note: When (i == 5) then break will break the control flow.
        continue
        // Note: On 5, prints the console.log then after that continues with 6 to 10.
    }
    console.log(`value of i is ${i}`);
}

