let divs = document.querySelectorAll('.parent-div div')
let turn = 0
let player1moves = []
let player2moves = []

let winningmoves = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9], 
    [3, 5, 7],
]

function checkWinner() {

    for (let pattern of winningmoves) {

        let p1win = pattern.every(num => player1moves.includes(num))
        let p2win = pattern.every(num => player2moves.includes(num))

        if (p1win) {
            alert("Player 1 wins")
            return
        }

        if (p2win) {
            alert("Player 2 wins")
            return
        }
    }

    if (player1moves.length + player2moves.length === 9) {
        alert("Draw")
    }

}

divs.forEach((d) => {
    d.addEventListener('click', () => {

        if (d.innerText !== '') return

        if (turn == 0) {
            d.innerText = 'x'
            turn = 1

            player1moves.push(([...divs].indexOf(d) + 1))
            checkWinner()
        }

        else {
            d.innerText = 'o'
            turn = 0

            player2moves.push(([...divs].indexOf(d) + 1))
            checkWinner()
        }

    })
})
