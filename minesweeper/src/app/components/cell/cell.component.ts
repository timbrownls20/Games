import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../../models/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() model: Cell;

  constructor() { }

  ngOnInit() {
  }

}
