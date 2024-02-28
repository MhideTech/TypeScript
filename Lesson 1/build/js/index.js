"use strict";
let userName = "Orlah";
let age = 18;
let isBrilliant = !false;
let postID = "110100"; // Union datatype
let aboutMe = "🤷‍♀️";
const sum = (a, b) => {
    return a + b;
};
// implicit
let stringArr = ["ade", "bola", "chale"]; // str arr
let guitar = ["Strat", "Les Paul", 5150]; // union arr (string or integer)
let anyArr = []; // any arr
// explicit
let test = ["ade", "bola", "shade"];
// tuple
let myTuple = ["Orlah", 20, true];
// Objects
let myObj = {
    prop1: "Orlah",
    prop2: 32,
    prop3: true,
};
console.log(myObj);
let evh = {
    name: "Orlah",
    active: true,
    albums: [1934, 3432, "The Glory Experience"],
};
let person1 = {
    name: "Dammy",
    noOfEyes: 2,
    canWalk: true,
};
const greetPerson = (person) => {
    if (person.name)
        return `Hello ${person.name.toUpperCase()}`;
    return `Hello!`;
};
console.log(greetPerson(person1));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 0] = "F";
    Grade[Grade["E"] = 1] = "E";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {})); // element @ first postion = 0
console.log(Grade.F);
