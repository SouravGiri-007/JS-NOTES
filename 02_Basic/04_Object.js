const tinderuser = new Object() // it creates singleton object
// console.log(tinderuser) // output: {}


const tinderUserTwo = {} // Non-singleton Object

tinderUserTwo.id = "123abc"
tinderUserTwo.name= "Rony"
tinderUserTwo.isLoggedin = false;

// console.log(tinderUserTwo); // Output: { id: '123abc', name: 'rony', isLoggedIn: false }

//**************************************************************************************************************************** */

// objects into object

const regularuser = {
    email: "some@#gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sourav",
            lastname:"Giri",
        }
    }
}

console.log(regularuser.fullname?.userfullname); // output: { firstname: 'Sourav', lastname: 'Giri' }


const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 2: "b"}

//const obj3 = {obj1,obj2}
// console.log(obj3); // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } } dont use it

const obj3 = ({...obj1, ...obj2});
//console.log(obj3);  // output: { '1': 'a', '2': 'b' }


/**************************************************************************************** */


const user = [
    {
        id: 1,
        gmail:"some@gmail.com"
    },
    {
        id:2,
        gmail:"x@gmail.com"
    },
    {
        id:3,
        gmail:"so@gmail.com"
    }
]

console.log(user[2].gmail); //output: so@gmail.com

/*-------------------------------------------------------------------------------------------------
Some more impotant syntax, */


console.log(Object.keys(tinderUserTwo)); // Output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUserTwo)); // Output: [ '123abc', 'Rony', false ]
console.log(Object.entries(tinderUserTwo)); /* Output: [ [ 'id', '123abc' ], [ 'name', 'Rony' ], 
[ 'isLoggedIn', false ] ] 


Checking Property exist or not, */
console.log(tinderUserTwo.hasOwnProperty('isLoggedIn')); // Output: true