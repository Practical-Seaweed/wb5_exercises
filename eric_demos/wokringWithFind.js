"use strict"

// this function is like a test for each value in the array
// the first item in the array that passes the test gets returned
// if nothing passes the test we get undefined
function isOver60(someValue) {
    if (someValue > 60) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isOver60(50));
console.log("----------------")

// just a list of numbers
let numberArray = [1, 5, 100, 70, 60, 36];
let numberArray2 = [1, 5, 30, 58, 60, 36];
let numberArray3 = [1, 5, 30, 58, 60, 37, 100, 200];


// running the test and storing the found value in over60
let over60 = numberArray.find(isOver60);
let over602 = numberArray2.find(isOver60);
let over603 = numberArray3.find(isOver60);

let over60Array = numberArray.filter(isOver60);

console.log(over60);
console.log(over602);
console.log(over603);
console.log(over60Array)
console.log("----------------")





// copied over eric cheap_candy.js to follow along better
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Giant Chewy Nerds", price: 6.00 },
    { product: "Snickers Bar", price: 1.89 },
    { product: "Mounds Bar", price: 1.50 },
    { product: "Sour Patch Kids", price: 3.79 },
    { product: "Everlasting Gobstopper", price: .99 },
    { product: "Ring Pop", price: 1.79 }
];

let filteredProducts = products.filter(function(product) {
    if(product.price < 2){
        return true;
    }
    return false;
})
console.log(filteredProducts);

// this won't work on here since eric did this in cheap_candy.js
// I'm just simply following along to have this saved
function findPriceLessThan2(someValue) {
    if (someValue.product === "Swedish Fish") {
        return true;
    } else {
        return false;
    }
}
// the .find fills in the someValue
let foundProduct = products.find(findPriceLessThan2);

console.log(foundProduct.product);
