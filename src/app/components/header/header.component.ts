import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headers: { "ID": string; "name": string; }[];

  constructor() { }

  ngOnInit() {
    this.headers = [{"ID":"1","name":"Watch"},{"ID":"2","name":"Movies"},{"ID":"3","name":"TV"},{"ID":"4","name":"Collections"},{"ID":"5","name":"Videos"}];

  }

}
