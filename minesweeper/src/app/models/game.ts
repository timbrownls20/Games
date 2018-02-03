import {Cell} from './cell';

export class Game {
    state: Cell[][];

    constructor(){
        this.state = new Array<Cell[]>();
    }
}