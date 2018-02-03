import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  model: number[];

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {

    this.model = Array<number>();
    for(let i = 1; i <= this.settingsService.settings.gridSize; i++){
      this.model.push(i);
    }
}

}
