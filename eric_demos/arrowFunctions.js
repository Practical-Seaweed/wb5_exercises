"use strict"

// [ standard function definition ]
function sayHello(greeting) {  // [ the thing inside the ( ) is a parameter, in this case it's "(greeting)" ]
    return greeting;
}

let greeting = sayHello("Hello! This is a standard function!");

console.log(greeting);


// [ function expressions ]
let someOtherFunction = function(someParameter){ // [ an anonymous function because it has no name, like the function above ]
    console.log(someParameter)
}
someOtherFunction("testing the function expression");


// [ arrow functions ]
let myArrowFunction = (someParameter) => { 
    console.log(someParameter);
}
myArrowFunction("testing the arrow function");

// [ arrow functions with curly brace. Allows for more than one line of code in m,y function
//    must have a return if I want it to return value ]
let myArrowFunction1 = (someParameter) => { 
    return someParameter
}
myArrowFunction("Thing in the arrow function");

// [ one line arrow function, return is implied. No curly braces allowed ]
let myArrowFunctionAgain = (someParameter) => someParameter;

myArrowFunction("Thing in the arrow function");

// [  ]
let cart = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&M's", price: 2.89 },
    { product: "Peanut M&M's", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Giant Chewy Nerds", price: 6.00 },
    { product: "Snickers Bar", price: 1.89 },
    { product: "Mounds Bar", price: 1.50 },
    { product: "Sour Patch Kids", price: 3.79 },
    { product: "Everlasting Gobstopper", price: .99 },
    { product: "Ring Pop", price: 1.79 }
];

let cartTotal = cart.reduce( (total, item) => total += item.price, 0)

console.log(cartTotal.toFixed(2));