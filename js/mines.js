'use strict';
console.log(getMines(gBoard,gLevel));

function getMines (board, gLevel) {
    var mines=[];
    var i=getRandomIntInclusive(0, board.length);
    var j=getRandomIntInclusive(0, board.length)
    var n=0;
    while ( n<gLevel.mines) {
        mines.push(board[i][j])
        console.log(Board[i][j]);
    }
}

function setMinesNegsCount() {
    

}

function cellClicked(elCell, i, j) {
    
    //TODO:  Model :onclick cell events.

    //TODO: render to the dome.
}

function cellMarked(elCell) {
    //TODO: Model: onright click mark a flag.

    //TODO: render to the dom.

}

function expandShown(board, elCell, i, j) {

    //TODO: When user clicks a cell with no mines around, we need to open not only that cell, but also its neighbors.
    // On first click- spred the mines.
    startTimer();
}







