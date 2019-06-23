import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../../provider/api.services';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  categories: any;

  constructor(private renderer: Renderer2, private apiService: ApiService) {
    this.renderer.addClass(document.body, 'modal-open');
   }
   
  ngOnInit() {
    this.getData();
  }



  getData() {
    this.apiService.getData("Category/CategoryList").then((result) => {
      this.categories = result;
    });
  };


  openNav() {
    console.log(1);
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("left-btn").style.display  = "none";
    this.renderer.addClass(document.body, 'xx');

    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("left-btn").style.display  = "block";
    document.getElementById("left-btn").style.paddingLeft  = "10px";
    // document.body.style.backgroundColor = "white";
  }

}
