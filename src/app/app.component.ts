import { Component, OnInit } from '@angular/core';
import { ApiService } from './provider/api.services';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trailer';
  categories: any;
  token: any;

  constructor (private http: HttpClient) {}

  ngOnInit() {
  }



}
