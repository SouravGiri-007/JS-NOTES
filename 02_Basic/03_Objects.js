/* 3. Objects

Note: When objects are declared as literals then singletons are not made, When objects are 
declared as constructors then singletons are made.

Object through constructor method, */

// Object.create

// And now we will discuss about Object literals below,

const mySym = Symbol("key1") // Declaring a Symbol.

const jsUser = {
    name: "Sourav", // here "name"  is treated as string & "Sourav" is it`s value
    "full name" : "Sourav Giri",
    age:18,
    location:"jaipur",
    email: "souravgiri247@gmail.com",
    isLoggedInDays : false,
    lastLoginDays: ["Monay","Saturday"]
}

//Accessing Objects

console.log(jsUser.email); // Output: souravgiri247@gmail.com | Not the ideal method of access.
console.log(jsUser["email"]); ///* Output: souravgiri247@gmail.com | When "" is used, the email key is interpreted as strings behind the screen. */
console.log(jsUser["full name"]); // you cant access it by ".fullname"

//change the value
jsUser.email="souravgiri986@gmail.com"
//if you freeze the object then you cant change the value

//Object.freeze(jsUser)

//jsUser.email = "sourav89@gmail.com"

//console.log(jsUser); /*We have frozen the object, so the  value won't change to "sourav89@gmail.com". */

/************************************************************************************************************/


// Adding Function

jsUser.greetings = function () {
    console.log("Hi JS user");
}

jsUser.greetings2 = function() {
    console.log(`Hi JS user, ${this.name}`); // Refering name key from the Object. 
}

console.log(jsUser.greetings()); // Output: Hi JS user
console.log(jsUser.greetings2()); // Output: Hi JS user, Sourav