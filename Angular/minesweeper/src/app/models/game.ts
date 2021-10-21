import {Cell} from './cell';

export class Game {
    
    state: Cell[][];
    numberOfMines:number;
    outcome: GameOutcome;

    get outcomeDisplay(){
        
        if(this.outcome === GameOutcome.Lost){
            return "Ouch! You've just prodded poor Kitty. You've lost.";
        }
        else if(this.outcome === GameOutcome.Won){
            return "You've found all the Kitty. Well done!!";
        }

        return "Where's Kitty?";
    }

    constructor(){
        this.state = new Array<Cell[]>();
        this.numberOfMines = 20;
        this.outcome = GameOutcome.InProgress;
    }
}

export enum GameOutcome{
    InProgress = 0,
    Lost = 1,
    Won = 2
}