import { Injectable, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../provider/api.services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable()
export class AuthenticationService {
    @Output() getLoggedInID: EventEmitter<any> = new EventEmitter();
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    user: any;

    constructor(private apiService: ApiService, private router: Router) {}

    login(data){
       
        return  this.apiService.postData( "/Auth/Login",data).then((result:any) => {
            if(result.isSuccess){
                this.user=result.data;
    
                    this.getLoggedInName.emit(this.user.name);    
    
                    localStorage.setItem("token",this.user.token);
                    localStorage.setItem("expiration",this.user.expiration);
                    localStorage.setItem("name",this.user.name);
                    return result;
                
            }else{
                return result;
            }
        });
    }

    logout(): void {
        localStorage.clear();
        this.getLoggedInID.emit(Number(0));    
        this.getLoggedInName.emit();   
        this.router.navigate(['/home']); 
    }

    register(data){
        return  this.apiService.postData( "/Auth/Register",data).then((result:any) => {
                return result;
        });
    }
}