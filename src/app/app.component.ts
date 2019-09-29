import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './provider/api.services';
import { HttpClient } from '@angular/common/http';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav',{static:true}) sidenav: MatSidenav;

  reason = '';
  title = 'trailer';
  categories: any;
  token: any;

  constructor (private http: HttpClient) {}

  ngOnInit() {
  }


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }



}
