import { Component, OnInit, Input } from '@angular/core';
import { IImage, StoreService } from '../services/store.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  @Input() data: IImage;

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

  onClick() {
    this.store.updateSelected = null;
  }
}
