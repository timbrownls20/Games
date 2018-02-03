import {Cell} from './cell';

export class Game {
    
    state: Cell[][];
    numberOfMines:number;

    constructor(){
        this.state = new Array<Cell[]>();
        this.numberOfMines = 20;
    }
}