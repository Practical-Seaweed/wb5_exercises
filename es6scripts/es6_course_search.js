"use strict";

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

// [ when does the PROG200 course start? ]
function findStartDate(someDate) {
    if (someDate.CourseId === "PROG200") {
        return true;
    } else {
        return false
    }
}
let findDate = courses.find(findStartDate)
console.log(`The PROG200 start date is`, findDate.StartDate);
// [ I'm not sure if the above counts...ohh but it does! ]
// [ eric solution below to find the course start date ]


// function findPROG200(course){

//     // [ if we found the match return true ]
//     if(course.CourseId === "PROG200") {
//         return true;
//     }

//     // [ otherwise we didn't find the match, return false ]
//     return false;

// }

// [ lets try to find something in the courses list (array) ]
// [ we want to find the courseId of PROG200 ]
// let prog200Course = courses.find(findPROG200);

// console.log(`The course start date for ${prog200Course.Title} 
// (${prog200Course.CourseId}) is (${prog200Course.StartDate})`);


// [ what is the title of the PROJ500 course? ]
function courseFindTitle(course) {
    if (course.CourseId === "PROJ500") {
        return true;
    } else {
        return false
    }
}
let findTitle = courses.find(courseFindTitle);
console.log(`The title for PROJ500 is`, findTitle.Title);
// // [ eric solution below to find the course title of PROJ500 ]

// let proj500course = courses.find((course) => {
//     // [ if we found the match return true ]
//     if(course.CourseId !== "PROJ500"){
//         return false;
//     }else {
//         // [ otherwise we didn't find the match, return false ]
//         return true;
//     }
// } )

// console.log(`The course title for courseId (${proj500course.CourseId}) is ${proj500course.Title}`);

// [ What are the titles of the courses that cost $50 or less? ]
let filterdPrices = courses.filter(function (findDaTitle) {
    if (findDaTitle.Fee <= 50) {
        return true;
    }
    return false;
})
console.log(filterdPrices);
// [ eric solution below to find the titles of courses under 50 dollars ]

let courseUnder50 = courses.filter((course) => {

    if (course.Fee <= 50) {
        return true;
    }
    return false;
})

// [ forEach Example ]
courseUnder50.forEach((course, idx) => { // idx means index
    console.log(`${course.Title} is 50 or less`)
});

// [ for loop example ]
for (let i = 0; i < courseUnder50.length; i++) {
    console.log(`${courses[i].Title} is 50 or less`)
}





// [ What classes meet in "Classroom 1"? ]
// [ the code below is eric's I couldn't finish in time to do my own code ]

let classroom1Courses = courses.filter((course) => {

    if (course.Location === "Classroom 1") {
        return true;
    }

    return false;

})

// [ done with a regular function instead of an arrow function ( => ) like we did above ]
classroom1Courses.forEach(function (course) {
    console.log(`${course.Title} is in Classroom 1`)
})

// [ this is the same as above but with an arrow function ]
classroom1Courses.forEach((course, idx) => {
    console.log(`${course.Title} is in Classroom 1`)
})

// [ or ]

// [ there is no reason to have a name ( example below ) because we are never going to use it ]
function printCourseInfo(course){
    console.log(`${course.Title} is in Classroom 1`)
}
console.log(printCourseInfo);