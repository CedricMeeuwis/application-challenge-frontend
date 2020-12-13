import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleAuthenticateService } from '../../services/role-authenticate.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _roleauthenticationService: RoleAuthenticateService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      localStorage.setItem("guard", JSON.stringify(this._roleauthenticationService.isAdmin()));
    if (this._roleauthenticationService.isAdmin()){
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
}
