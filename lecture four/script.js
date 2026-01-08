
const sumOfNumber = (para1, para2 = 1) => para1 + para2;
console.log(sumOfNumber(1,3));


function sumofnumber(para1, para2) {
    return function () {
        return para1 + para2;
    };
}



