import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {RoleAuthenticateService} from '../../../security/services/role-authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class KapiteinGuard implements CanActivate {
  constructor(private _roleauthenticationService: RoleAuthenticateService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._roleauthenticationService.isKapitein()){
        return true;
      } else {
        this.router.navigate(['']);
      }
  }
}