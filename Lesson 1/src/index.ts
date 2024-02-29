let userName: string = "Orlah";
let age: number = 18;
let isBrilliant: boolean = !false;
let postID: number | string = "110100"; // Union datatype
let aboutMe: any = "🤷‍♀️";

const sum = (a: number, b: number) => {
  return a + b;
};

// implicit
let stringArr = ["ade", "bola", "chale"]; // str arr
let guitar = ["Strat", "Les Paul", 5150]; // union arr (string or integer)
let anyArr = []; // any arr

// explicit
let test: string[] = ["ade", "bola", "shade"];

// tuple
let myTuple: [string, number, boolean] = ["Orlah", 20, true];

// Objects
let myObj: object = {
  prop1: "Orlah",
  prop2: 32,
  prop3: true,
};
console.log(myObj);

// type Guitarist = {
//   name: string;
//   active: boolean;
//   albums: (string | number)[];
// };

// let evh: Guitarist = {
//   name: "Orlah",
//   active: true,
//   albums: [1934, 3432, "The Glory Experience"],
// };

// Interface
interface Person {
  name?: string;
  noOfEyes: number;
  canWalk: boolean;
}

let person1: Person = {
  name: "Dammy",
  noOfEyes: 2,
  canWalk: true,
};

const greetPerson = (person: Person) => {
  if (person.name) return `Hello ${person.name.toUpperCase()}`;
  return `Hello!`;
};

console.log(greetPerson(person1));

// Enums
enum Grade {
  F,
  E,
  D,
  C,
  B,
  A,
} // element @ first postion = 0
console.log(Grade.F);

// Type Alliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  album: stringOrNumberArray;
};

// Literal types
let namee: "Dave";
let unionName: "Orlah" | "Divine" | "Tomiwa" | "IB";
unionName = "IB";
