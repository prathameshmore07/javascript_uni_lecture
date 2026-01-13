export function myMap(array, callback) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const mapped = callback(array[i], i, array);
        newArray.push(mapped);
    }

    return newArray;
}
