import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const key = '10833312-2057245317c70ecb6ef03b686';
const image_type = 'photo';
const baseApi = 'pixabay.com/api/';

export interface IImage {
  comments: number;
  downloads: number;
  favorites: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _images: BehaviorSubject<IImage[]>;
  private _selected: BehaviorSubject<IImage>;

  dataStrore: any = {};

  constructor(private http: HttpClient) {
    this._images = new BehaviorSubject<IImage[]>(null);
    this._selected = new BehaviorSubject<IImage>(null);
  }

  get images(): Observable<IImage[]> { return this._images.asObservable(); }
  get selected(): Observable<IImage> { return this._selected.asObservable(); }

  searchImages(strArr: string[] = []) {
    const full_str = strArr.join('+');
    this.http.get<any>(`https://${baseApi}?key=${key}&q=${full_str}&image_type=${image_type}`).subscribe(res => {
      this._images.next([...res.hits]);
    }, error => {
      console.log('error loading images ' + error);
    });
  }

  set updateSelected(value) {
    this._selected.next(value);
  }
}
