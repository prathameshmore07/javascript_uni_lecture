// Sum using reduce
let nums = [1, 2, 3, 4, 5];

let result = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(result); 

// Sum using for loop
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum); 

// Filter & map examples
let arr = [10, 9, undefined];

// Filter numbers only
let filteredArr = arr.filter((i) => typeof i === "number");
console.log(filteredArr); 