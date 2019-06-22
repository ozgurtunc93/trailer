import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'modal-open');
   }
   
  ngOnInit() {
  }

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
