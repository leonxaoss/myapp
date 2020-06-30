import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Unsplash } from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  key = 'rYLteWpuM1687P8NfECHBDulPx4hQ8wskT-oRveVCe8';
  // const unsplash = new Unsplash({ accessKey: '{rYLteWpuM1687P8NfECHBDulPx4hQ8wskT-oRveVCe8}' });

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(
      `https://api.unsplash.com/photos/?client_id=${this.key}`
    );
  }
}
