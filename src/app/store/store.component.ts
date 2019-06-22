import { Component} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ApiService } from '../provider/api.services';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent {
  store: any = [];
  param: string;
  storeChannel: any = [];
  subStores = [{ "ID": "1", "name": "Watch" }, { "ID": "2", "name": "Movies" }, { "ID": "3", "name": "TV" }, { "ID": "4", "name": "Collections" }, { "ID": "5", "name": "Videos" }];

  constructor(private route: ActivatedRoute, private apiService: ApiService,private router: Router) {
 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }
 
  ngOnInit() {
    this.route.params.subscribe(val => {
      this.param = this.route.snapshot.paramMap.get("p1");
      let storePage = this.subStores.find(x => x.name == this.param);

      if (storePage == undefined) {
        this.getData('1');
      } else {
        this.getData(storePage.ID);
      }
    });
  }

  getData(id: string) {
    this.apiService.getData("Movies/GetStore?storeId=1").then((result) => {
      this.store = result;
      this.store = JSON.parse(this.store);
      console.log(this.store);
      var ind = this.store.OTHERS.findIndex(x => x.isChannel == 1);
      if (ind > -1) {
        this.storeChannel = this.store.OTHERS[ind];
        this.store.OTHERS.splice(ind, 1);
      }
    });
  };


  selectSwipperConfig = { '1': 'movieConfig', '2': 'showConfig', '3': 'showConfig' };

  public landConfig: SwiperConfigInterface = {
    observer: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
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
    slidesPerView: 4,
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
