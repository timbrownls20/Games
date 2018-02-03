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

    this.model = new Game();
    for(let i = 0; i < this.settingsService.settings.gridDimension; i++){

      this.model.state[i] = [];
      for(let j = 0; j < this.settingsService.settings.gridDimension; j++){
        
        this.model.state[i][j] = new Cell(i, j);
      }        
    }

    return this.model;

  }

}
