import { Injectable } from '@angular/core';
import { CurrentUser } from '../models/current-user.model';
import { UserInformationService } from './user-information.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticateService {

  user: CurrentUser;
  info: boolean = false;
  administrator: boolean = false;

  constructor(
    private _userInformationService: UserInformationService,
  ) {
    this.getInfo();
  }

  getInfo() {
    if (localStorage.getItem("token") != null) {

      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user = currentUser;
        this.info = true;
      });
    }
  }

  isLoggedIn() {
    if (localStorage.getItem("token") != null) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (localStorage.getItem("token") != null) {
      if (this.user.isAdmin == true) {
        console.log(this.user.isAdmin);
        return true;
      } else {
        return false;
      }
    }
  }

  isKapitein() {
    if (localStorage.getItem("token") != null) {
      if (this.user.isKapitein == true) {
        return true;
      } else {
        return false;
      }
    }
  }

  isUser() {
    if (localStorage.getItem("token") != null) {
      if (this.user.isAdmin == false && this.user.isKapitein == false) {
        return true;
      } else {
        return false;
      }
    }
  }
}
