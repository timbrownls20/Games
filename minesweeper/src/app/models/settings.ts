export class Settings {
    
    gridDimension: number;

    private _cellSize: number; 

    get gridSize() : number{
        return this._cellSize * this.gridDimension;
    }

    constructor(gridSize:number){
        this.gridDimension = gridSize;
        this._cellSize = 30;
    }

}