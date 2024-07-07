// 5. De-Structuring Object,

/* Destructuring objects in JavaScript is a convenient way to extract properties from objects 
and assign them to variables. This syntax simplifies accessing data within objects and helps 
you write cleaner and more readable code. */


const course = {
    courseName: "Learn Javascript",
    price: "999",
    courseInstructor: "Sourav"
}
// const {courseInstructor, price} = course
const {courseInstructor: instructor} = course
console.log(instructor); // Output: Sourav



/*Data can be arranged using JSON (Javascript Object Notation), a straightforward format that is understandable by both machines and humans.
It's similar to packing information neatly for transportation.

The given JSON data is an array of three empty objects,

   [
      {},
      {},
      {}
   ] 
*/ 