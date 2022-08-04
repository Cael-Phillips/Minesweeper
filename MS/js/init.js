const container = document.getElementById("container");

function setupTiles(dimensions, numOfMines){
    let board = [];
    //setup the grid
    for (let x = 0; x < dimensions; x++) {
        let row = [];
        for (let y = 0; y < dimensions; y++) {
            tile=new Tile(x,y);//inits a tile
            //sets a random tile to a mine
            if (numOfMines > 0 && isEven()){
                tile.MineSet=true;
                numOfMines--;
            }//if
        row.push(tile);
        }//for - y
        board.push(row);
    }//for - x
    return board;
}//setup

/**
 * @returns boolean
 */
function isEven(){
    return (Math.floor(Math.random() * 10))%2==0;
}//isEven

function setupBoard(dimensions, numOfMines){
    let board = setupTiles(dimensions, numOfMines);
    container.style.setProperty('--grid-rows',dimensions);
    container.style.setProperty('--grid-cols',dimensions);
    for (let x = 0; x < dimensions; x++) {
        for (let y = 0; y < dimensions; y++) {
            let cell = document.createElement("div");
            cell.id = board[x][y].coords;
            cell.addEventListener("click", function(){
                 let coords = cell.id.split(",");
                 coords[0]=parseInt(coords[0])
                 coords[1]=parseInt(coords[1])
                 board[coords[0]][coords[1]].revealTile=true;
                 console.log(board[coords[0]][coords[1]]);
                 cell.innerText=nearbyCount(board,coords,dimensions);
                 cell.style.color="white";
                 cell.style.backgroundColor="silver";
            });
            cell.addEventListener("contextmenu", function(){
                 let coords = cell.id.split(",");
                 if (board[coords[0]][coords[1]].getFlag){
                     board[coords[0]][coords[1]].setFlag=false;
                     cell.style.backgroundColor="silver";
                     cell.style.color="silver";
                     cell.innerText="";
                    }else{
                        board[coords[0]][coords[1]].setFlag=true;
                        cell.style.backgroundColor="red";
                        cell.style.color="black";
                        cell.innerText="FLAGGED";
                 }
                 console.log(board[coords[0]][coords[1]]);
            });
            container.appendChild(cell).className = "grid-item";
        }//for
    }//for
}//setupBoard


setupBoard(5, 5);