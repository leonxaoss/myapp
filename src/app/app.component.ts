import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import Unsplash from 'unsplash-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'synebo';
  arr = [];
  key = 'rYLteWpuM1687P8NfECHBDulPx4hQ8wskT-oRveVCe8';

  private unsplash = new Unsplash({ accessKey: this.key });
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.getAll().subscribe((resp: any) => {
      console.log(resp);
      this.arr = resp;
    });


    this.unsplash = new Unsplash({
      accessKey: this.key,
      headers: {
        'X-Custom-Header': 'foo'
      },
      timeout: 500
    });

    console.log(this.unsplash);
  }

}
