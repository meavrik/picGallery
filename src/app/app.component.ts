import { Component } from '@angular/core';
import { StoreService, IImage } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  images: IImage[];
  selected: IImage;

  constructor(private store: StoreService) {

    this.store.selected.subscribe(selected => {
      this.selected = selected;
    });
    this.store.images.subscribe(images => {
      this.images = images;
    });
  }
}
