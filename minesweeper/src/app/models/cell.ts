export class Cell {
    row: number;
    column: number;
    hasMine: boolean;

    constructor(row:number, column:number){
        this.row = row;
        this.column = column;
    }

}