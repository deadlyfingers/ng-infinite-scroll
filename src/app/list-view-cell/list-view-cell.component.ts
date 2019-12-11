import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../types';

@Component({
  selector: 'app-list-view-cell',
  templateUrl: './list-view-cell.component.html',
  styleUrls: ['./list-view-cell.component.scss']
})
export class ListViewCellComponent implements OnInit {
  @Input() data: Media;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
