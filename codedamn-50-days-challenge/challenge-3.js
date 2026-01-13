const currentDate = new Date();
console.log(currentDate);

function formatDate(currentDate) {
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    currentDate = `${day}-${month}-${year}`;
    return currentDate;
}
export {formatDate};