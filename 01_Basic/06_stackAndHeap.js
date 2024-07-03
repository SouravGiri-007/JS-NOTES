// 6. Stack & Heap

// Example of Stack,
let myYoutubeName = "Sourav" // Primitive Type so myYoutubeName will go into stack.
let anotherName = myYoutubeName // This will have the copy value of myYoutubeName.
anotherName = "Souravgiri" // It's value will go in stack.
console.log(myYoutubeName); // Output : Sourav (Original value did not change)
console.log(anotherName); // Output : Souravgiri (Only Copy value is changed)
/* So, here we have changed the copy not the original value.

---------------------------------------------------------------------------------------- */

// Example of Heap,
let userOne = { // UserOne will go into Stack. (Primitive)
    email: "user@google.com",
    upi: "user@ybl"
} // items between {} will go into Heap. (Non-Primitive)
let userTwo = userOne // userTwo will get reference from original value.
userTwo.email = "sourav@google.com"
console.log(userOne.email); // Output : sourav@google.com
console.log(userTwo.email); // Output : sourav@google.com
// (Original Value gets changed)