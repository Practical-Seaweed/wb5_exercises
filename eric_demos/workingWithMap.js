"use strict"

let kids = [
    { first: "Natalie", last: "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly" }
];


let arrayOfFirstNames = kids.map((kid) => {
    return kid.first;
})

console.log(arrayOfFirstNames);

// .map is working with the data, .filter is like a true or false statement thing
let newArrayOfKidsFullNames = kids.map((kid) => {

    return `${kid.first} ${kid.last}`;

})

console.log(newArrayOfKidsFullNames);

// [ get a new list of an object with a new key (property) of fullName added ]
// [ Full name combines the first and last properties to get it's value ]
let newArrayOfKidsWithFullNames = kids.map((kid) => {

    // returns a new object
    return { ...kid, fullName: `${kid.first} ${kid.last}` } /* [ the "...kid," is a spread operator, takes two 
                                                            properties and adds them into one new property ]
                                                            */
    
})

console.log(newArrayOfKidsWithFullNames);