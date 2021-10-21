export class Cell {
    
    row: number;
    column: number;
    hasMine: boolean;
    surroundingMines: number;
    state: CellState;
    
    private _display: string;

    get display(): string {
        if(this.surroundingMines > 0 && !this.hasMine)
            return this.surroundingMines.toString();
        else
            return "";
    }

    constructor(row:number, column:number){
        this.row = row;
        this.column = column;
        this.state = CellState.covered;
        this.hasMine = false;
        this.surroundingMines = 0;
    }

    
}

export enum CellState {
    covered = 0,
    revealed = 1,
    flag = 2
}