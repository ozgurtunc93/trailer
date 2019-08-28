import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../../provider/api.services';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  categories: any;

  constructor (private apiService: ApiService) {}
   
  ngOnInit() {
    this.getData();
  }

  showFiller = false;

  getData() {
    this.apiService.getData("/Category/GetCategories").then((result:any) => {
      this.categories = result.data;
    });
  };


  openNav() {
    console.log(1);
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("left-btn").style.display  = "none";
    // this.renderer.addClass(document.body, 'xx');

    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("left-btn").style.display  = "block";
    document.getElementById("left-btn").style.paddingLeft  = "10px";
    // document.body.style.backgroundColor = "white";
  }

}
