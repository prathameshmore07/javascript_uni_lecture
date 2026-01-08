alert("Free");

for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue;
    }
    alert(i);
}

const username = prompt("Enter username", "Pekka");
const isEpic = confirm("Is it an epic card?");
