import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StoreService, IImage } from '../services/store.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  images: IImage[];
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.images.subscribe(images => {
      this.images = images;
    });
  }

  onSearch(str) {
    this.store.searchImages([str]);
  }

  onKeyup(event: KeyboardEvent, str: string) {
    if (event.keyCode === 13) {
      this.store.searchImages([str]);
    }

  }

}
