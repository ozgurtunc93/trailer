import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ApiService } from '../provider/api.services';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  episodes: any[];
  seasons: any[];
  contentDetail: any = [];
  param: string;
  param2: string;

  storeChannel: any = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }



  ngAfterViewInit() {
   
  }



ngOnInit() {
  this.route.params.subscribe(val => {
    this.contentDetail = [];
    this.episodes = [];
    this.seasons = [];
    this.param = this.route.snapshot.paramMap.get("p1");
    this.param2 = this.route.snapshot.paramMap.get("p2");
    //content detay
    this.getData(this.param2);
    //show-> sezon ve episodes bilgisi
    this.getSeasons(this.param2, this.param);

  });
}

getData(contentID: string) {
  this.apiService.getData("/Movie/GetMovieDetails?id="+contentID ).then((result:any) => {
    this.contentDetail = result;
    console.log(this.contentDetail);
  });
};

getSeasons = function (id, pg) {
  if (pg == 'shows') {
    this.apiService.getData(id, "getSeasons/").then((result) => {
      this.seasons = result;
      this.seasons = JSON.parse(this.seasons);
      this.showID = this.seasons.seasons[0].ID;
      this.tempSeasonNumber = this.seasons.seasons[0].seasonNumber;
      this.apiService.getData(this.showID, "getEpisodes/").then((res) => {
        this.episodes = res;
        this.episodes = JSON.parse(this.episodes);
      });
    });
  } else {
    // this.seasons;
  }
};

getEpisodes = function (id, pg) {
  if (pg == 'shows') {
    this.apiService.getData("", "getEpisodes/" + id).then((res) => {
      this.episodes = res;
      this.episodes = JSON.parse(this.episodes);
      this.swiperr.directiveRef.update();
    });
  } else {
    // this.episodes; 
  }
};

  public contentArtistConfig: SwiperConfigInterface = {
  slidesPerView: 6,
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
      slidesPerView: 3,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
};

  public contentEpisodesConfig: SwiperConfigInterface = {
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

}
