import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerService } from 'ngx-spinner';

import { map, catchError } from 'rxjs/operators';

let apiURL = "http://test.kodummu.org/api";

let token = localStorage.getItem('userToken');



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private spinner: NgxSpinnerService) { }

  postData(parameters: any,body :any) {
    return new Promise((resolve, reject) => {
      // let headers = new HttpHeaders().set('apiKey', token);
       let url = apiURL  + parameters ;
       console.log(body,"Body");
       this.http.post(url,body).subscribe(res => {
        console.info("postData", res);
        resolve(res);
      }, (err) => {
        resolve(err);       
      });
    });
  }
 

  getData(parameters: string) {
  /** spinner starts on init */
  this.spinner.show();


    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({
        'Content-Type':'application/json;charset=utf-8',
        'Access-Control-Allow-Orgin':'*',
        'Access-Control-Allow-Methods':'*'
      });  

      let url = apiURL + parameters;
    //   const helper = new JwtHelperService();
      this.http.get(url,{headers}).subscribe((res: any) => {
        //   const decodedToken = helper.decodeToken(res);
        console.info('1',res)
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
      }, 1000);
          resolve(res);

      }, (err) => {
          console.log("Patladi",err);
          resolve(err);
      });
    });
  }
 
  deleteData(parameters: string, func: String) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({
        'Content-Type':'aplication/json',
        'apikey':"d326be24-80d2-11e7-894f-faaa62ee82c0",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
      });
      let url = apiURL + func + parameters;
      console.log(url);
      this.http.delete(url, { headers: headers,responseType:'text' }).subscribe((res: any) => {
        console.info("deleteData", res);
        resolve(res);
      }, (err) => {
        resolve(err);
        //this.app.getActiveNav().push(ErrorPage);
      });
    });
  }


  mysql2date(timestamp) {
    //function parses mysql datetime string and returns javascript Date object
    //input has to be in this format: 2007-06-05 15:26:02
    let regex = /^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
    let parts = timestamp.replace(regex, "$1 $2 $3 $4 $5 $6").split(' ');
    return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
  }
 
  jsonToTable (jsonValue:any) {
    for(let child of jsonValue){
      return child[0];
    };
  }
}