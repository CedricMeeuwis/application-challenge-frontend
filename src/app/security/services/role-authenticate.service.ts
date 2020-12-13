import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { CurrentUser } from '../models/current-user.model';
import { UserInformationService } from './user-information.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticateService {
  user = new BehaviorSubject<CurrentUser>(null);
  info: boolean = false;
  administrator: boolean = false;

  constructor(private _userInformationService: UserInformationService) {
    this.getInfo();
  }

  getInfo() {
    if (localStorage.getItem("token") != null) {
      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user.next(currentUser);
      });
    }else{
      this.user.next(null);
    }
  }
  isAdmin(){
    if (localStorage.getItem("token") != null && jwtDecode(localStorage.getItem("token"))["IsAdmin"] == "True") {
      return true;
    }else{
      return false;
    }
  }
  isLoggedIn(){
    if (localStorage.getItem("token") != null) {
      return true;
    }else{
      return false;
    }
  }
  isKapitein(){
    if (localStorage.getItem("token") != null && jwtDecode(localStorage.getItem("token"))["IsKapitein"] == "True") {
      return true;
    }else{
      return false;
    }
  }
}
