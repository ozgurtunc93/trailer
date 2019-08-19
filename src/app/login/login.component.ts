import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.services';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {'email': '', 'password': ''};

  constructor(private apiService: ApiService) {  }     

  ngOnInit() {
  }

  signIn(data: any) {
    console.log(data)
    this.apiService.postData("/User/Login", data).then((result) => {
  });

  }

}
