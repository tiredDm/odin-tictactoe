
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







const game = (function createGame(){
    let board = theBoard;
    let stateCount = 0;
    createTiles();

    function createTiles(){
        for(let i = 0; i < 9; i++){
            let div = document.createElement('div');
            div.classList.add('cell');
            div.innerHTML = '';
            div.addEventListener('click', () => {
                writeTile(div, div.innerHTML);
            });
            theBoard.boardDom.appendChild(div);
        }
    }


    function writeTile(tile,innerHTML){
        if(innerHTML == '') {
            console.log(innerHTML);
            if(stateCount%2 == 0){
                tile.setHTML('X');
            } else {
                tile.setHTML('O');
            }
            stateCount++;
            console.log('clicked');
        }
    }   


    return {board};
})();



/* Shit being called out.. */