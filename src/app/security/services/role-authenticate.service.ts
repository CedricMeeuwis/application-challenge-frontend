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
    if (localStorage.getItem("token") !=null){

      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user = currentUser;
        this.info = true;
      });
    }
  }

  isLoggedIn() {
    if (localStorage.getItem("token") !=null && this.info==true){

      
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (localStorage.getItem("token") !=null){

      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user = currentUser;
        this.info = true;

        if (this.user.isAdmin == true) {
          console.log(this.user.isAdmin);
          this.administrator == true;
        } else {
          this.administrator == false;
        }
      });

      if(this.administrator  == true){
        return true;
      } else {
        return false;
      }
    }
  }

  isKapitein() {
    if (this.isLoggedIn) {
      const kapitein = this.user.isKapitein;
      if (kapitein == true) {
        return true;
      } else {
        return false;
      }
    }
  }
}
