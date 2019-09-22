import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {'email': '', 'password': ''};
  hide = true;
  userID: any = 0;
  
  constructor(private router: Router, private authenticationService: AuthenticationService,private toastr: ToastrService) {  }     

  ngOnInit() {
    this.userID = parseInt(localStorage.getItem("userID"));
    if (this.userID > 0) {
      console.log(this.userID)
      this.router.navigate(["/home"]);
    }
  }

  
  signIn(data:any) {
    if (data.email != "" && data.password != "") {
      this.authenticationService.login(data).then((result:any) => {
        if (result.isSuccess) {
            this.router.navigate(["/home"]);
        } 
        if(result.isSuccess == false){
          this.toastr.error(result.message,'', {
            timeOut: 3000,
            progressBar:true
          });
        }
      });
    } else {
     //TODO
    }
  }

}
