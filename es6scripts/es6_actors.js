"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];

// [  Who is the Academy Member whose ID is 187? ]
let whoseID = academyMembers.find( (personID) => personID.memID === 187)
console.log(`${whoseID.name} has the ID of 187`);

console.log("------------------------------");

// [  Who has been in at least 3 films? ]
let atleast3 = academyMembers.filter( (in3Films) => in3Films.films.length >= 3);
// console.log(`${atleast3.name} has been in 3 or more films`)    [ this give me undefined for ${academyMembers.name, 
//                                                             for each name to be specific ]

atleast3.forEach(personName => console.log(`${personName.name} has been in 3 or more films`))
// [ had to add forEach for it to work, to get each person name ]

//                                        [ eric solution for the 3Films ]

// let atLeast3E = academyMembers.filter( (member) => {

//     if(member.films.length >= 3){
//         return true;
//     }
//     return false;

// } )

// console.log(atLeast3E);




console.log("------------------------------");

// [  Who has a name that starts with "Bob"? ]
let getBOB = academyMembers.filter( (findBob) => {
    if(findBob.name.indexOf("Bob") !== -1){
        return true;
    }
    return false;
} );
getBOB.forEach(personBob => console.log(`${personBob.name} has a name with "bob"`) )

//                                        [ eric solution for the Bobs ]

// let theBobs = academyMembers.filter( (member) => {
//     if(member.name.indexOf("Bob") === 0){
//         return true;
//     }
//     return false;
// } )
// console.log(theBobs);

console.log("------------------------------");


// [   HARDER: Which Academy Members have been in a film that starts with "A" ]


//                                        [ eric solution for the films that start with A ]

// [ find all the actors who have films that start with the letter A 
//  loop over all the actors in the academyMembers array using a filter. ]
let theAfilms = academyMembers.filter( (member) => {

    // [ looping over all the films for each actor (member) ]
    // for(let i = 0; i < member.films.length; i++) {

    //     // [ do any of the films start with A ]
    //     if(member.films[i].indexOf("A") === 0){
    //         return true;
    //     }
    //     return false;

    // }
    // [ this is from ChatGPT ]
    // [ slick way of doing this with .some and .startWith ]
    return member.films.some((film) => {
        return film.startsWith("A");
        });





}  )
// [ display the members that have a film starting with A ]
console.log(theAfilms);
// [ but the one below is better ]
theAfilms.forEach(movieA => console.log(`${movieA.name} has films starting with "A"`))