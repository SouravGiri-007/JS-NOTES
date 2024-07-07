// Array
const myArr = [0,1,2,3,4, "sourav"]
const MyHeros = ["Iron man","SPiderMAn","Black Panthar"]

const MyArr2 = new Array(1,2,3,4)
// console.log(myArr[5]);

// Array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()/




// myArr.unshift(0)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));



// const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr); /* Note: .join binds and converts array into strings.

//slice, splice

console.log("A = ",myArr); // output A =  [ 0, 1, 2, 3, 4, 'sourav' ]

const myn1 = myArr.slice(1,3)   /* Include value at index 1 and 2 but don't include value at 
index 3. */
console.log(myn1); // output [ 1, 2 ]


console.log("B = ",myArr) // output B =  [ 0, 1, 2, 3, 4, 'sourav' ]
const myn2 = myArr.splice(1,3)  


console.log("c = ",myArr)  
console.log(myn2);// output  [ 1, 2, 3 ]

// Note: But in splice we can see it removes the elements and manipulates the original array.