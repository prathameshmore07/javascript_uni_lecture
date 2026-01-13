//1
let nums = [];
//2
let numbers = [1, 2, 3, 4, 5];
//3
console.log(numbers.length)
//4
console.log(numbers[0]);
console.log(Math.floor(numbers.length-1)/2);
console.log(numbers[Math.floor(numbers.length-1)]);
//5
let mixedDataTypes=[1,"pekka",3,"jarvis",4,9]
console.log(mixedDataTypes.length);
//6
let itCompanies=[ 'Facebook' ,'Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(itCompanies);

//7
console.log(itCompanies);

//8
console.log(itCompanies.length);

//9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor((itCompanies.length - 1)/2)]);
console.log(itCompanies[Math.floor(itCompanies.length-1)]);

//10
for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i]);
}

//11
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}
