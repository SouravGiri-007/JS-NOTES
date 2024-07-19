const languages = ["html", "css", "ruby", "go"]

const result = languages.forEach((lang) => {
    // console.log(lang)
    return lang
})
//console.log(result); // Output: undefined

/* Note: As observed, the 'forEach' method does not return any value, regardless of whether we use the return keyword or not.


------------------------------------------------------------------------------------------------------
Filter */

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> {
    return num>4
})

//console.log(newNums);  //Output: [ 5, 6, 7, 8, 9, 10 ]


// bY for each 

const Nknums= []

myNums.forEach((item) => {
    if(item > 4){
        Nknums.push(item)
    }
});
console.log(Nknums);


/**************************************************************************************************************************************** */

const books = [
    { title: 'The First Book', genre: 'Mystery', publish: 1985, edition: 2005 },
    { title: 'The Second Book', genre: 'Biography', publish: 1994, edition: 2011 },
    { title: 'The Third Book', genre: 'Fantasy', publish: 2001, edition: 2010 },
    { title: 'The Fourth Book', genre: 'Thriller', publish: 1990, edition: 2015 },
    { title: 'The Fifth Book', genre: 'Philosophy', publish: 2010, edition: 2017 },
    { title: 'The Sixth Book', genre: 'Science Fiction', publish: 1988, edition: 2012 },
    { title: 'The Seventh Book', genre: 'Romance', publish: 1983, edition: 1995 },
    { title: 'The Eighth Book', genre: 'Adventure', publish: 2013, edition: 2018 },
    { title: 'The Ninth Book', genre: 'Romance', publish: 1987, edition: 1992 },
];


const userBooks = books.filter((bkl) => bkl.genre=== 'Romance')

console.log(userBooks);