import { Component, OnInit, Input, EventEmitter, ViewEncapsulation, Output } from '@angular/core';
import { Cell, CellState } from '../../models/cell';
import { GameOutcome } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CellComponent implements OnInit {

  @Input() model: Cell;
  @Output() clickedMine: EventEmitter<boolean>

  //outcome: GameOutcome;

  constructor(private gameService: GameService) { 
    this.clickedMine = new EventEmitter<boolean>();
    //his.outcome = this.gameService.model.outcome;
  }

  ngOnInit() {
  }

  onClick(){
    
    if(!this._gameActive()) return;

    this.model.state = CellState.revealed;
    if(this.model.hasMine) {
      this.clickedMine.emit(true);
      this.gameService.model.outcome = GameOutcome.Lost;
    }
  }

  onRightClick(){

    if(!this._gameActive()) return;

    if(this.model.state == CellState.covered)
      this.model.state = CellState.flag;
    else if(this.model.state == CellState.flag)
      this.model.state = CellState.covered;
    
    
    return false;
  }

  private _gameActive(): boolean{
    return this.gameService.model.outcome === GameOutcome.InProgress;
  }


}
