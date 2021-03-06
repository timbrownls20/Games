import { Injectable } from '@angular/core';

import { Game } from '../models/game';
import { Cell } from '../models/cell';
import { SettingsService } from './settings.service';

@Injectable()
export class GameService {

  model:Game;

  private _cellSize: number; 

    
  get gridSize() : number{
        return this._cellSize * this.settingsService.settings.gridDimension;
  }

  constructor(private settingsService: SettingsService ) { 
    this._cellSize = 30;
  }


  createGame(): Game{

    //.. basic grid
    this.model = new Game();
    for(let i = 0; i < this.settingsService.settings.gridDimension; i++){

      this.model.state[i] = [];
      for(let j = 0; j < this.settingsService.settings.gridDimension; j++){
        
        this.model.state[i][j] = new Cell(i, j);
      }        
    }

    //.. place mines
    let randomMines: [number, number][] = this.getRandomMines(this.model.numberOfMines, this.settingsService.settings.gridDimension);

    for(let randomMine of randomMines){
      this.model.state[randomMine[0]][randomMine[1]].hasMine = true;
    }

    //..work out surrounding mines
    for(let i = 0; i < this.settingsService.settings.gridDimension; i++){
      for(let j = 0; j < this.settingsService.settings.gridDimension; j++){
        this.model.state[i][j].surroundingMines = this.getSurroundingMineCount(i, j);
      }        
    }

    return this.model;

  }

  getSurroundingMineCount(centreX:number, centreY:number): number{
      
      let mineCount = 0;
    
      for(let row = centreX-1; row<=centreX+1;row++){
        for(let column = centreY-1; column<=centreY+1;column++){
       

         if(row >=0 && row < this.settingsService.settings.gridDimension
            && column >=0 && column < this.settingsService.settings.gridDimension
           && !(row === 0 && column === 0)){
             
             if(this.model.state[row][column].hasMine) mineCount++;
          }
        }
     }

     return mineCount;
  }

  getRandomMines(numberOfMines:number, gridDimension:number): [number, number][]{

    let randomNumbers: number[] = this.getRandomNumbers(gridDimension * gridDimension)
    
    let randomMines: [number, number][] = new Array<[number, number]>();
    for(let i = 0; i < numberOfMines; i++){

      let row = Math.floor(randomNumbers[i] / gridDimension);
      let column = randomNumbers[i] % gridDimension;

      randomMines.push([row, column]);
    }
    
    return randomMines;
  }

  getRandomNumbers(maxNumber: number): number[]{
    
    let randomNumbers: number[] = new Array<number>();
    for(let i = 0; i < maxNumber; i++)
    randomNumbers.push(i);
    
    randomNumbers = this.shuffle(randomNumbers);

    return randomNumbers;
  }

  shuffle<T>(array: T[]): T[] {
    
    var currentIndex:number = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


  

}
