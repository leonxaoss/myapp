import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  key = 'rYLteWpuM1687P8NfECHBDulPx4hQ8wskT-oRveVCe8';
  unsplash = new Unsplash({ accessKey: this.key });

  getPhotos(page: number, perPage: number): Promise<any> {
    return this.unsplash.photos.listPhotos(page, perPage, 'latest');
  }
}
