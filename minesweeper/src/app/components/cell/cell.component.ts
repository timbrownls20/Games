import { Component, OnInit, Input, EventEmitter, ViewEncapsulation, Output } from '@angular/core';
import { Cell, CellState } from '../../models/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CellComponent implements OnInit {

  @Input() model: Cell;
  //@Output() reveal: EventEmitter<boolean>

  constructor() { 
    //this.reveal = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  onClick(){
    this.model.state = CellState.revealed;
    //this.reveal.emit(true);
  }

  onRightClick(){
    console.log("right click");

    if(this.model.state == CellState.covered)
      this.model.state = CellState.flag;
    else if(this.model.state == CellState.flag)
      this.model.state = CellState.covered;
    
    
      return false;
  }


}
