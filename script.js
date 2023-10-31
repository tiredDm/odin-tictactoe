
/* Factory Functions.... */
const theBoard = (function createBoard () {
    const boardDom = document.querySelector('.board');
    const board = ['','','','','','','','',''];
    return { board, boardDom };
})();

function createPlayer(character) {
    const XorO = character;
    return { XorO };
}

function createTiles(){
    for(let i = 0; i < 9; i++){
        let div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('click', () => {
            writeTile(div, 'x');
        });
        theBoard.boardDom.appendChild(div);
    }
}

function writeTile(tile,character){
    if(tile.innerHtml !='X') {
        tile.setHTML('X');
        console.log('clicked');
    }

}

function winWatcher(){ // tells who wins, or if there was a draw..

}

const game = (function createGame(){
    let board = theBoard;
    createTiles();
    return {board};
})();



/* Shit being called out.. */