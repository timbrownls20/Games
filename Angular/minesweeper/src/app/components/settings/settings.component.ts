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

  hasSaved: boolean;

  constructor(private settingsService: SettingsService) { 
   
  }

 
  ngOnInit() {
    this.model = new Settings(this.settingsService.settings.gridDimension);
  }

  @Input() saveSettings (){
    this.settingsService.settings.gridDimension = this.model.gridDimension;
    this.hasSaved = true;
  }

}
