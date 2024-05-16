"use strict"

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

// [ which candies costs less than $4.00 ]
let under4 = cart.filter( (product) => {

     // if(product.price < 4){
     //     return true;
     // }
     // return false;

    return product.price < 4  // [ same thing as above, but this is shorter and it will work ]
});
     //                          [ or ]

     // let under4 = cart.filter( (product) => product.price < 4 );

     // [ the comment function above this comment also works, it's just in one line. ]

console.log(under4)

// [ which candies has "M&M" in its name ]
let eminem = cart.filter( ( product ) => {  // [ eminem because i cant put M&M's ]
    if(product.product.indexOf("M&M") !== -1){
        return true;
    }
    return false;
} );
console.log(eminem)
// [ do we carry "Swedish Fish" ? ]
let carryFish = cart.find( (fish) => {

    return fish.product === "Swedish Fish";

} );
console.log(carryFish);

if(carryFish){
    console.log("We carry those things!")
}else{
    console.log("Go to another store!");
}

// [ same thing above as a ternary ]
(carryFish) ? console.log("We carry those things!") : console.log("Go to another store!");
// [ the first thing is for true, second one is for false ]