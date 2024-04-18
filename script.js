const cells = document.querySelectorAll(".cell");
let currentPlayer = 'X';
cells.forEach(cell => {
    cell.addEventListener('click',cellClick);
})

function cellClick(e) {
    const cell = e.currentTarget;
    // console.log(cell);
        cell.textContent= currentPlayer;
        cell.removeEventListener('click',cellClick);
        // cell.textContent = currentPlayer;
        if(checkWin()){
            alert(`${currentPlayer} Wins`);
            reset();
        } else if (checkDraw()){
            alert('Draw');
            reset();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

function checkWin(){
    const combinations =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const condition of combinations){
        const [a, b, c] = condition;
        if(cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer){
            return true;
        }
    }
    return false;
}

function checkDraw(){
    for (let i=0;i<cells.length;i++){
        if(cells[i].textContent === 'X' && cells[i].textContent === 'O'){
            return true;
        }
    }
    return false;
}

function reset(){
    cells.forEach(cell => {
        cell.textContent = '';
        currentPlayer = 'X';
    });
}
