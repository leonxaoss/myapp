import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { toJson } from 'unsplash-js';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'synebo';
  arr = [];
  isLoad = true;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getPhotos(1, 10)
      .then(toJson)
      .then(json => {
        this.arr = json;
        console.log(this.arr);
      })
      .catch((err: HttpErrorResponse) => console.error(err))
      .finally(() => {
        this.isLoad = false;
      });
  }

}
