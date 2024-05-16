"use strict"

let lockerAndAccessCode = [
    ["Locker 1", 135], // [ this is the first array so this is 0, inside that array, "Locker 1" is 0 ,135 is 1 ]
    ["Locker 2", 159], // [ this is the second array so this is 1, inside that array, "Locker 2" is 0 ,159 is 1 ]
    ["Locker 3", 642] // [ this is the third array so this is 2, inside that array, "Locker 3" is 0 ,642 is 1 ]
];


console.log(lockerAndAccessCode[2][1]) // [ this gets me 642 ]
console.log("------------------------------");
console.log(lockerAndAccessCode[2]) // [ this gets me "Locker 2" the entire locker list ]
console.log("------------------------------");