import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings.service';
import { GameService } from '../../services/game.service';

import { Settings } from '../../models/settings';
import { Game } from '../../models/game';
import { Cell, CellState } from '../../models/cell';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  model: Game;
  gridSize: number;
  
  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.model = this.gameService.createGame();
    this.gridSize = this.gameService.gridSize;
  }

  clickedMine(): void{
    console.log(`grid detected mine click:: gridSize ${this.gameService}`);

    for(let row of this.model.state){ 
      for(let cell of row){
        cell.state = CellState.revealed;
      }
    }
  }
}
