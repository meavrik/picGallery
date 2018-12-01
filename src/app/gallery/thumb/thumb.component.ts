import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IImage } from '../../services/store.service';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent implements OnInit {
  @Input() data: IImage;
  @Output() selected: EventEmitter<IImage> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.selected.emit(this.data);
  }

}
