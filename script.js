
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
    let gameOver = false;
    const result = document.querySelector('.result');
    const restartButton = document.querySelector('.restart');
    createTiles();

    restartButton.addEventListener('click', () => {
        reStart();
    });

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
        if(!gameOver){
            if(innerHTML == '') {
                console.log(innerHTML);
                if(stateCount%2 == 0){
                    tile.setHTML('X');
                    
                } else {
                    tile.setHTML('O');
                }
                stateCount++;
                console.log('clicked');
                checkIfWin();
            }
        }
    }   


    function checkIfWin(){
        //0,1,2 --> 3,4,5 --> 6,7,8 || 
        //0,3,6 -->1,4,7 --> 2,5,8 ||
        //0,4,8 --> 2, 4, 6
       
        let tiles = game.board.boardDom.children;
        for(let i = 0; i < 3; i++){
            //HORIZONTALS
            if(tiles[i*3].innerHTML ==tiles[(i*3)+1].innerHTML && tiles[i*3].innerHTML == tiles[(i*3)+2].innerHTML && tiles[(i*3)].innerHTML != ''){
                console.log(tiles[i*3].innerHTML + ' wins');
                result.innerHTML = tiles[i*3].innerHTML + ' wins';
                gameOver = true;
            //VERTICALS
            } else if (tiles[i].innerHTML ==tiles[i+3].innerHTML && tiles[i].innerHTML == tiles[i+6].innerHTML && tiles[i].innerHTML != ''){
                console.log(tiles[i].innerHTML + ' wins');
                result.innerHTML = tiles[i].innerHTML + ' wins';
                gameOver = true;
            }
        }
        //DIAGONALS: 
        if(tiles[0].innerHTML ==tiles[4].innerHTML && tiles[0].innerHTML == tiles[8].innerHTML && tiles[0].innerHTML != ''){
            console.log(tiles[0].innerHTML + ' wins');
            result.innerHTML = tiles[0].innerHTML + ' wins';
            gameOver = true;
        //VERTICALS
        } else if (tiles[2].innerHTML ==tiles[4].innerHTML && tiles[2].innerHTML == tiles[6].innerHTML && tiles[2].innerHTML != ''){
            console.log(tiles[2].innerHTML + ' wins');
            result.innerHTML = tiles[2].innerHTML + ' wins';
            gameOver = true;
        }

        if(stateCount == 9){
            console.log('It is a Tie');
            result.innerHTML = 'It is a Tie';
            gameOver = true;
        }
    }

    function destroyTiles(){
        game.board.boardDom.innerHTML = '';
    }

    function reStart(){
        gameOver = false;
        stateCount = 0;
        destroyTiles();
        createTiles();
        result.innerHTML = '';
    }

    return {board};
})();



/* Shit being called out.. */