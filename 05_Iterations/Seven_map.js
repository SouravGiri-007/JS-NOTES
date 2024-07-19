const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const newNums = myNumbers.map((num)=> num+10)
console.log(newNums);

/*********************************************************************************************************************** */

//Chaining

const myNums = myNumbers.map((num) => num * 10)
                .map((num) => num+1)/*Here,value will be taken from upper method.
                eg. 1*10 = 10; 10+1 =11*/
                .filter((num)=> num >= 40 ) //same as here

console.log(myNums);//output: [ 41, 51, 61, 71, 81, 91 ]