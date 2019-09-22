import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {'name': '', 'surname': '', 'email': '', 'password': '', 'rePassword': '', 'notification': true,'language':0 };
  hide = true;
  reHide = true;

  constructor(private router: Router, private authenticationService: AuthenticationService,private toastr: ToastrService) { }

  ngOnInit() {
  }

 
  signUp(data:any) {
    console.log(data)
    if(data.password === data.rePassword){
      console.log(data)

      if (data.email != "" && data.name != ""  && data.surname != "" && data.password != "" && data.rePassword != "") {
        console.log(data)

        this.authenticationService.register(data).then((result:any) => {
          if (result.isSuccess) {
            this.toastr.success(result.message,'', {
              timeOut: 10000,
              progressBar:true
            });
            setTimeout(() => {
              this.router.navigate(["/home"]);
            }, 10000);
          } 
          if(result.isSuccess == false){
            this.toastr.error(result.message,'', {
              timeOut: 3000,
              progressBar:true
            });
          }
        });
      } 
    }else {
      this.toastr.error("Girilen şifreler eşleşmiyor",'', {
        timeOut: 3000,
        progressBar:true
      });
    }
 
  }
}
