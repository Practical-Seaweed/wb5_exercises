"use strict"

let someArray = [
    
    {name: "Eric", kids: ["Sam", "Pam", "Cam"]},
    {name: "Chanda", kids: ["Jim", "Kim", "Tim"]},

]

someArray.forEach((someValue) => {

    console.log(`${someValue.name} has kids:`)

    someValue.kids.forEach((value) => {
        console.log(value)
    })
    
    console.log(`--------------------`)
    
})