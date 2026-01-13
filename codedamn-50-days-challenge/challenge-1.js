let use_array =[1,2,3,4,5]
export function myMap(use_array, callBack){
    let newArray = [];
    for (let i = 0; i < use_array.length; i++) {
        newArray.push(callBack(use_array[i],i, use_array));
    }
    return newArray;
}
console.log(myMap(use_array, (item, index) => `value at index ${index} : ${item * 2}`));

export function myFilter(use_array, callBack){
    let newArray = [];
    for (let i = 0; i < use_array.length; i++) {
        if (callBack(use_array[i],)) {
            newArray.push(use_array[i]);
        }
    }
    return newArray;
}
console.log(myFilter(use_array, (item) => item > 2 ));
// reduce
export function myReduce(use_array, callBack, initialValue){
    let accumulator = initialValue;
    for (let i = 0; i < use_array.length; i++) {
        accumulator = callBack(accumulator, use_array[i]);
    }
    return accumulator;
}
console.log(myReduce(use_array, (accumulator, currentValue, initialValue) => accumulator + currentValue, 0));