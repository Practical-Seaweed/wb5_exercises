"use strict"

// [ this is a multi-dimensional-Array: an array with arrays in it ]
let lockerAndAccessCode = [
    ["Locker 1", 135], // [ this is the first array so this is 0, inside that array, "Locker 1" is 0 ,135 is 1 ]
    ["Locker 2", 159], // [ this is the second array so this is 1, inside that array, "Locker 2" is 0 ,159 is 1 ]
    ["Locker 3", 642] // [ this is the third array so this is 2, inside that array, "Locker 3" is 0 ,642 is 1 ]
];
console.log(lockerAndAccessCode[0][1]) // [ this gets me 135 ]
console.log("------------------------------");
console.log(lockerAndAccessCode[2][1]) // [ this gets me 642 ]
console.log("------------------------------");


let teamMembers = [
    ["Dana", "Brenda", "Happy"], // [ team 1 ]
    ["Laura", "Patti"],         // [ team 2 ]
    ["Lesley", "Randy", "Mollye", "Ranse"], // [ team 3 ]
    ["Eloise", "Robert"] // [ team 4 ]
];

// [ loop over all the teams ]
teamMembers.forEach( (team, i) => { // [ i is the index, automatic version of i++ ]
    console.log("--------------");
    console.log(`Team ${i + 1}`) // [ add the plus 1 so we can start with team 1 instead of team 0 ]
    console.log("--------------");

    team.forEach( (member) => {
        console.log(member)
    } )

} )