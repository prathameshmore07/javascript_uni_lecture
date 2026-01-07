//what is operand?
//what is operator?
//binary plus
//unary plus
//increment
//decrement

let a = 68;
let b = 1;
console.log(a + b); // 69

// typeof operator datatype batata hai
// "10" ek string hai, 10 number hai

console.log(typeof "10" == 10); 
console.log(typeof "10" === 10);  

// unary plus (+)
// string ko number me convert karta hai
let fname = "10";
fname = +fname;      // yaha string "10" number 10 ban gaya
// fname = Number(fname); // ye bhi same kaam karta hai
console.log(fname); 

// increment aur decrement
// ++var_name / --var_name pehle increment karega fir use karega
// var_name++ / var_name-- pehle value use karega fir increment karega

let counter = 1;
counter++;            // pehle value use hui, fir increment
console.log(counter); 

let count = 1;
console.log(++count); // pehle increment hua, fir print (2)
