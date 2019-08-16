import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {'name': '', 'surname': '', 'email': '', 'password': '', 'confirmpassword': '' };
  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }
  Register(data: any) {
    console.log(data)
    this.apiService.postData("/User/Register", data).then((result) => {
  });
  }
}
