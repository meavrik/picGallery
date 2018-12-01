import { Component, OnInit } from '@angular/core';
import { StoreService, IImage } from '../services/store.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: IImage[] = [];
  selected: IImage;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.images.subscribe(images => {
      this.images = images;
    });
  }

  onThumbSelect(data) {
    this.store.updateSelected = data;
    this.selected = data;
  }

}
