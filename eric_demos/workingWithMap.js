"use strict"

let kids = [
    { first: "Natalie", last: "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly" }
];

// .map is working with the data, .filter is like a true or false statement thing
let newArrayOfKidsFullNames = kids.map((kid) => {

    return `${kid.first} ${kid.last}`;

})

console.log(newArrayOfKidsFullNames);

let newArrayOfKidsWithFullNames = kids.map((kid) => {

    // returns a new object
    return {...kid, fullName: `${kid.first} ${kid.last}`}

})

console.log(newArrayOfKidsWithFullNames);