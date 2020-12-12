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
    this.isAdmin();
  }

  getInfo() {
    if (localStorage.getItem("token") != null) {

      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user = currentUser;
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
    if (localStorage.getItem("token")) {
      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user = currentUser;
        this.info = true;
      });

      if (this.info == true) {

        if (this.user.isAdmin == "True") {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  isKapitein() {
    if (localStorage.getItem("token")) {
      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user = currentUser;
        this.info = true;
      });

      if (this.info == true) {

        if (this.user.isKapitein == "True") {
          return true;
        } else {
          return false;
        }
      }
    }
  }


  isUser() {
    if (localStorage.getItem("token")) {
      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user = currentUser;
        this.info = true;
      });

      if (this.info == true) {

        if (this.user.isAdmin == "False" && this.user.isKapitein == "False") {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
