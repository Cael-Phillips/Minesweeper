function nearbyCount(board,coord,max){
    let nearMines=0;
    //top left corner
    if (coord[0] == 0 && coord[1]==0) {
        if(board[coord[0]+1][coord[1]].getMine){
            nearMines++;
        }
        if(board[coord[0]+1][coord[1]+1].getMine){
            nearMines++;
        }
        if(board[coord[0]][coord[1]+1].getMine){
            nearMines++;
        }
        return nearMines;
    }
    //top right corner
    if (coord[0] == 0 && coord[1]==max-1) {
        if(board[coord[0]+1][coord[1]].getMine){
            nearMines++;
        }
        if(board[coord[0]+1][coord[1]-1].getMine){
            nearMines++;
        }
        if(board[coord[0]][coord[1]-1].getMine){
            nearMines++;
        }
        return nearMines;
    }
    //bottom left corner
    if (coord[0] == max-1 && coord[1]==0) {
        if(board[coord[0]-1][coord[1]].getMine){
            nearMines++;
        }
        if(board[coord[0]-1][coord[1]+1].getMine){
            nearMines++;
        }
        if(board[coord[0]][coord[1]+1].getMine){
            nearMines++;
        }
        return nearMines;
    }
    //bottom right corner
    if (coord[0] == max-1 && coord[1]==max-1) {
        if(board[coord[0]-1][coord[1]].getMine){
            nearMines++;
        }
        if(board[coord[0]-1][coord[1]-1].getMine){
            nearMines++;
        }
        if(board[coord[0]][coord[1]-1].getMine){
            nearMines++;
        }
        return nearMines;
    }
    //top edge
    if (coord[0] == 0 && coord[1]>0 && coord[1]<max-1) {
        if(board[coord[0]+1][coord[1]].getMine){
            nearMines++;
        }
        if(board[coord[0]+1][coord[1]+1].getMine){
            nearMines++;
        }
        if(board[coord[0]][coord[1]+1].getMine){
            nearMines++;
        }
        if(board[coord[0]+1][coord[1]-1].getMine){
            nearMines++;
        }
        if(board[coord[0]][coord[1]-1].getMine){
            nearMines++;
        }
        return nearMines;
    }
    //bottom edge
    if (coord[0] == max-1 && coord[1]>0 && coord[1]<max-1) {
        if(board[coord[0]-1][coord[1]].getMine){
            nearMines++;
        }
        if(board[coord[0]-1][coord[1]+1].getMine){
            nearMines++;
        }
        if(board[coord[0]-1][coord[1]-1].getMine){
            nearMines++;
        }
        if(board[coord[0]][coord[1]+1].getMine){
            nearMines++;
        }
        if(board[coord[0]][coord[1]-1].getMine){
            nearMines++;
        }
        return nearMines;
    }
    if (coord[1] == 0 && coord[0]>0 && coord[0]<max-1) {
        //left edge
    }
    if (coord[1] == max-1 && coord[0]>0 && coord[0]<max-1) {
        //right edge
    }
    

    //everything else
    return nearMines;
}