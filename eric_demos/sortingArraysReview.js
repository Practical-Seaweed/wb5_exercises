"use strict"

let kidsNames = ["Abe", "Bob", "Steven", "Jimmy"];

console.log(kidsNames.sort())

let numbers = [1, 23, 11, 67, 111, 200]

let sortNumbersAsc = (a, b) => {
    return a - b
}

let sortNumbersDesc = (a, b) => {
    return b - a
}

// [ where the value your sorting on has a key of value ]
let sortNumbersInArrayOfObjects = (a, b) => {
    return a.value - b.value
}

console.log(numbers.sort(sortNumbersDesc));

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

console.log(items.sort(sortNumbersInArrayOfObjects))


let sortyByStringInObject = (a, b) => {
    const nameA = a.name.toUpperCase(); // [ ignore upper and lowercase ]
    const nameB = b.name.toUpperCase(); // [ ignore upper and lowercase ]
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
}

console.log(items.sort(sortyByStringInObject))


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

console.log(cart.sort((a, b) => {
    const nameA = a.product.toUpperCase(); // [ ignore upper and lowercase ]
    const nameB = b.product.toUpperCase(); // [ ignore upper and lowercase ]
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // [ names must be equal ]
    return 0;
}))

console.log(cart.sort((a, b) => {
    return b.price - a.price
}))