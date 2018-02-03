import { Injectable, OnInit } from '@angular/core';
import { Settings } from '../models/settings';

@Injectable()
export class SettingsService implements OnInit {

  settings: Settings;

  constructor() { 
    this.settings = new Settings(10);
  }

  ngOnInit(){
    
  }

}
