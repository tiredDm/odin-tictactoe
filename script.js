
/* Factory Functions.... */
const theBoard = (function createBoard () {
    const board = ['','','','','','','','',''];
    return { discordName };
})();

function createPlayer(character) {
    const XorO = character;
    return { XorO };
}

function createTiles(){
    for(let i = 0; i < 9; i++){
        let div = document.createElement('div');
        div.addEventListener('click', () => {
            writeTile(div, 'x');
        });
        boardDom.appendChild(div);
    }
}

function writeTile(tile,character){
    if(tile.innerHtml.length != 0) {
        tile.innerHtml == character;
    }
}

function winWatcher(){ // tells who wins, or if there was a draw..

}

const game = (function createGame(){
    let board = theBoardoard;
    return {board};
})();



/* Shit being called out.. */