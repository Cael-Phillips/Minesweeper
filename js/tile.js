class Tile {
    constructor(xcord, ycord){
        this.xcord = xcord;
        this.ycord = ycord;
        this.isMine = false;
        this.flagged = false;
        this.revealed = false;
    }//constructor
    set MineSet(isMine){
        this.isMine = isMine;
    }
    set setFlag(flag){
        this.flagged = flag;
    }
    get getFlag(){
        return this.flagged;
    }
    get getMine(){
        return this.isMine;
    }
    set revealTile(reveal){
        this.revealed = reveal;
    }
    get coords(){
        return(`${this.xcord},${this.ycord}`);
    }
    toString(){
        console.log(`X:\t${this.xcord}\nY:\t${this.ycord}\nMine Tile:\t${this.isMine}\nFlagged:\t${this.flagged}\nRevealed:\t${this.revealed}`);
    }//toString
}//Tile