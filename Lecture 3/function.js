//function declaration
function sayHello(fname){
    console.log(`Hello, ${fname}`);
}
sayHello("MegaKnight")

// function calling with variable
let fname = "Pekka"
sayHello(fname);

// function reference (call nahi hota)
sayHello;

// function ka type check
console.log(typeof sayHello)

//arrow function
const sayNamaskar = (fname) => console.log(`Namaskar ${fname}`)
sayNamaskar("Bowler")

// arrow function with two parameters
const sayRom = (fname, lname) =>
  console.log(`Rom ${fname} ${lname}`);

sayRom("Bowler"); // lname missing hai

// null comparison
console.log(null == 0);

// function expression
let greet = function (fname) {
  console.log(`hello ${fname}`);
};
greet("skeleton");

// function return example
function sumOfNumber(a, b){
    return a + b;
}
console.log(sumOfNumber(1, 2));

// arrow function return
const addOfNumber = (z, y) => z + y;
console.log(addOfNumber(5, 2));

// if condition check
if (false) console.log("hello");
if (1) console.log("bye");
