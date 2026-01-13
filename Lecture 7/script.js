// map applied on array, return new fresh array, accept --> callback 
// array.map(value,index)=>{value*2}

// let array=[1,2,3,4,5];
// function myMap(array, callback){
//     let newArray=[];
//     for(let i=0; i<array.length; i++){
//         newArray.push(callback(array[i], i, array));
//     }
//     return newArray;

// }
// console.log(myMap(array,(value) => value*2));

function myFilter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let nums = [10, 9, null, undefined];

console.log(
    myFilter(nums, (value) => {
        return typeof value === "number";
    })
);
