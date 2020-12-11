import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticateService {

  constructor() {
    this.isLoggedIn();
   }

  isLoggedIn(){
    if (localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }

  isAdmin(){
    if (this.isLoggedIn){
      if (localStorage.getItem("isAdmin")){
        return true;
      } else {
        return false;
      }
    }
  }

  isKapitein(){
    if (this.isLoggedIn){
      if (localStorage.getItem("isKapitein")){
        return true;
      } else {
        return false;
      }
    }
  }
}
