import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/settings';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  model: number[];

  settings: Settings;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {

    this.settings = this.settingsService.settings;

    this.model = Array<number>();
    for(let i = 1; i <= this.settingsService.settings.gridDimension; i++){
      this.model.push(i);
    }

  }

}
