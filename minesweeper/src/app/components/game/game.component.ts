import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings.service';
import { GameService } from '../../services/game.service';

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

  constructor(private settingsService: SettingsService, private gameService: GameService) { }

  ngOnInit() {

    this.settings = this.settingsService.settings;
    this.model = this.gameService.createGame();
  }

}
