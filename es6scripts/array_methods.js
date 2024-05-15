"use strict"

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

// [ build a new array for just the items names using map ]
let itemNames = cart.map( (cartItem) => {
    return cartItem.item;
} );
console.log(itemNames);

// [ loop over itemNames with forEach to display each name ]
itemNames.sort().forEach( (item) => { // [ WOOOOOW IT WAS REALLY THAT SIMPLE ]
    console.log(item)
} )





/* [ we have to account for the quantity of each items, 
    which is why i added ( item.quantity ) and multiplied 
    them with item.price ]
*/
let cartTotal = cart.reduce( (total, item, quantity) => {
    return total += item.price * item.quantity
}, 0 )

console.log(`The total amount is ${cartTotal.toFixed(2)}`);

// [ sort the list before displaying it ]

// [ to solve this all we had to do was add .sort to the itemNames ]
// [ with the forEach to display it alphabetically ]