// For in Loop

//for in loop on objects


const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

/* output: js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple

*/


/* Note: For in Loop works on Objects. 

----------------------------------------------------------------
'For in' on Array */

const programming = ["js", "cpp", "java", "py"]
for (const key in programming) {
    // console.log(key); // Gives array keys from 0 to 3 (index)
    console.log(programming[key]);
} /* Ouput: Gives values inside programming array. 

----------------------------------------------------------------
'For in' on Map */


const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "France")

for (const [key, value] in map) {
    console.log(key, '=', value);
} // Output: Runs but gives not value

// Note: Maps is not iterable in 'for in' loop.