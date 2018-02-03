import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class SettingsService implements OnInit {

  _gridSize:number;

  get gridSize(): number{
    return this._gridSize;
  }

  constructor() { 
  
    debugger;
    this._gridSize = 10;
     

  }

  ngOnInit(){

  }

}
