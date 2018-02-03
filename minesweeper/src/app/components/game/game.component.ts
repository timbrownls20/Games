import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/settings';
import { Game } from '../../models/game';
import { Cell } from '../../models/cell';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  model: Game;
  settings: Settings;
  //gridDimension: number[];

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {

    this.settings = this.settingsService.settings;
    //this.gridDimension = this

    this.model = new Game();
    for(let i = 0; i < this.settingsService.settings.gridDimension; i++){

      this.model.state[i] = [];
      for(let j = 0; j < this.settingsService.settings.gridDimension; j++){
        
        this.model.state[i][j] = new Cell(i, j);
      }        
    }
  }

}
