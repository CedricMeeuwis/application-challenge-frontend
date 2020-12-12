import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { GebruikerService } from 'src/app/gebruiker/gebruiker.service';
import { CurrentUser } from '../models/current-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  isAdmin: boolean = false;
  isKapitein: boolean = false;

  constructor() { }

  decode() {
    if (localStorage.getItem("token") != null) {
      return decode(localStorage.getItem("token"));
    }
  }

  getUserInfo(_callback) {
    if (localStorage.getItem("token") != null) {

      setTimeout(function () {
        const userInfo = this.decode();

        const userID: number = +userInfo.UserID;
        const ploegID: number = +userInfo.PloegID;

        const stringIsAdmin = userInfo.IsAdmin;

        if (stringIsAdmin === "True") {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }

        const stringIsKapitein = userInfo.IsKapitein;

        if (stringIsKapitein === "True") {
          this.isKapitein = true;
        } else {
          this.isKapitein = false;
        }

        this.user = new CurrentUser(userInfo.Email, userInfo.Naam, stringIsAdmin, stringIsKapitein, userID, ploegID);
        _callback(this.user as CurrentUser);

      }.bind(this), 0);
    }
  }
}