"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

let numbers = [1, 20, 33, 56, 29, 87, 100];

// [ start our total ]
let total = 0;

// [ looping over our numbers ]

// for(let i = 0; i < numbers.length; i++){

//     // [ adding our current number to our total ]
//     total += numbers[i];

// }

numbers.forEach((number) => {
    total += number
})

console.log(total);


// [ using reduce ]
let sum = numbers.reduce((currentTotal, number) => {
    return currentTotal + number;
}, 0) /* [ you can choose where to start counting from, not necessary 
        if we want it to count as 0 already, as it counts by 0 by default ]
     */
console.log(sum)

let totalCourseCost = courses.reduce((currentTotal, course) => {
    return currentTotal + Number(course.Fee)
}, 0) /* [ added the ", 0" to make this work, to see it as a number maybe?... ]
      */
console.log(`The total of all the courses is: ${totalCourseCost}`);

console.log(`---------------------------------`);


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

let cartTotal = cart.reduce( (total, item) => {
    return total += item.price
}, 0)

console.log(cartTotal.toFixed(2));