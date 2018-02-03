import { Component, OnInit, Input } from '@angular/core';
import { Settings } from '../../models/settings';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  model: Settings;

  constructor(private settingsService: SettingsService) { 
    this.model = new Settings(10);
  }

 
  ngOnInit() {
  }

  @Input() saveSettings (){
    this.settingsService.settings.gridSize = this.model.gridSize;
  }

}
