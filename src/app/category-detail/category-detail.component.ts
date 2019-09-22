import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../provider/api.services';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  categoryDetail: any = [];
  param: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService,private router: Router) {
 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.param = this.route.snapshot.paramMap.get("p1");
      this.getData( this.param);

    });
  }

  offset = 0;
  limit = 10;
  getData(categoryID: any) {
    var data = {'id':categoryID,'language':'0','offset':this.offset,'limit':this.limit,'filterId':0}
    this.apiService.postData('/Category/GetCategoryDetails', data).then((result:any) => {
    
      if(this.offset>0){
        this.categoryDetail.data.CategoryMovies = this.categoryDetail.data.CategoryMovies.concat(result.data.CategoryMovies);
      }else{
        this.categoryDetail = result;
      }
      this.offset +=this.limit;
  });
}

}
