import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.services';
import { Model } from './model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private model: Model = new Model();


  constructor(private apiService: ApiService) {  }     

  ngOnInit() {
  }
  signIn(data: any) {
    console.log(this.model)
    this.apiService.postData("/User/Login", this.model).then((result) => {
  });

  }

}
