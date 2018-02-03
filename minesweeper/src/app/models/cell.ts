export class Cell {
    row: number;
    column: number;
    hasMine: boolean;
    state: CellState;

    constructor(row:number, column:number){
        this.row = row;
        this.column = column;
        this.state = CellState.covered;
    }
}

export enum CellState {
    covered = 0,
    revealed = 1
}