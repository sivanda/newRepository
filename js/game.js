'use strict';

const MINE = '*';
const EMPTY = '';
const FLAGE = 'F';

var gBoard;
var gLevel = {
    size: 4,
    mines: 2
};
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};
var gCell = {
    minesAroundCount: 0,
    isShown: true,
    isMine: false,
    isMarked: true
};
var gIntervalShow;

function inIt() {
    gBoard = buildBoard();
    printMat(gBoard, '.board-container');
    gGame.isOn = true;

}
console.table(buildBoard());
function buildBoard() {
    // TODO: bild a board to the model
    var mat = createMat(gLevel.size, gLevel.size);
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat.length; j++) {
            mat[i][j] = gCell;

        }
    }


    return mat;
}



function renderBoard(board) {

    //TODO: write the board to HTML
}

function checkGameOver() {
    //TODO: Game ends when all mines are marked, and all the other cells are shown.

    // TODO: msg: win or lose. 

}

