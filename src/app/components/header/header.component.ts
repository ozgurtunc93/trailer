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
    this.apiService.getData("/Menu/GetMenuListByType?menuType=1").then((result:any) => {

      this.headers = result.data[0].menuDetails;

      this.headers.forEach((data: any,index:number) => {
        this.headers[index].parents = [];
        if(data.parentDetailId){
          let ind = this.headers.map(x => x.id).indexOf(data.parentDetailId);	
          this.headers[ind].parents.push(data);
          console.log(this.headers)
          // let subInd = this.headers.map(x => x.id).indexOf(data.id);	
          // this.headers.splice( index, 1 )
        }
      });
      this.headers.forEach((data: any,index:number) => {
        if(data.parents.length > 0){
          data.parents.forEach((subData: any,index:number) => {
               let subInd = this.headers.map(x => x.id).indexOf(subData.id);	
               this.headers.splice( subInd, 1 )
          });
        }
      });

      console.log(this.headers);
    });
  };

}
