import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  authenticateUrl = "https://localhost:5001/api/User/authenticate";
  constructor(private _httpClient: HttpClient) { }
  
  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>(this.authenticateUrl, userLogin);
  }
  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
