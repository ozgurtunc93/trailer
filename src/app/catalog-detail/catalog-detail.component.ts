import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.services';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {

 
  catalogDetail: any;
  param: any;

  constructor (private route: ActivatedRoute, private apiService: ApiService,private router: Router) {}
   
  ngOnInit() {
    this.route.params.subscribe(val => {
      this.param = this.route.snapshot.paramMap.get("p1");
      this.getData( this.param);

    });
  }



  getData(id:any) {
    this.apiService.getData("/Catalog/GetCatalogById?id="+id).then((result:any) => {
      this.catalogDetail = result;
    });
  };

  public movieConfig: SwiperConfigInterface = {
    slidesPerView: 6,
    spaceBetween: 40,
    observer: true,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  };

  public showConfig:SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 40,
    grabCursor: true,
    observer: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  };

  public collectionConfig:SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 40,
    observer: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };

}
