"use strict"

let person = {
    name: "Marceline",
    age: 11,
    gender: "Female"
};

for(let property in person) { // [ property is the key to the inside of person ]

    console.log(`The key is ${property} and the value is ${person[property]}`); // [ this will give me "Marceline", 11, "Female" ]

}