import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';
import { PhotoInterface } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  key = 'rYLteWpuM1687P8NfECHBDulPx4hQ8wskT-oRveVCe8';
  unsplash = new Unsplash({ accessKey: this.key });

  getPhotos(page: number, perPage: number): Promise<PhotoInterface[]> {
    return this.unsplash.photos.listPhotos(page, perPage, 'latest');
  }
}
