import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/provider/api.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headers: any=[];

  constructor (private apiService: ApiService) {}
   
  ngOnInit() {
    this.getData();
  }



  getData() {
    this.apiService.getData("/Menu/GetMenuListByType?menuType=1").then((result) => {
      console.info(result.data[0].menuDetails)
      this.headers = result.data[0].menuDetails;
    });
  };

}
