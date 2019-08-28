import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.services';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {'email': '', 'password': ''};
  hide = true;
  
  constructor(private apiService: ApiService) {  }     

  ngOnInit() {
  }

  signIn(data: any) {
      this.apiService.postData("/User/Login", data).then((result) => {
    });
  }


}
