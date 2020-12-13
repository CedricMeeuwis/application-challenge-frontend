import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../models/user-login';
import { AuthenticateService } from '../services/authenticate.service';
import { UserInformationService } from '../../security/services/user-information.service';
import { CurrentUser } from '../models/current-user.model';
import { RoleAuthenticateService } from '../services/role-authenticate.service';
 
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  userLogin: UserLogin = new UserLogin('', '');
  user: CurrentUser;
  admin: boolean;
  constructor(
    private _authenticateService: AuthenticateService,
    private _userInformationService: UserInformationService,
    private _roleAuthenticateService: RoleAuthenticateService,
    private router: Router) {
 
  }
 
  ngOnInit(): void {
  }
  onSubmit() {
    localStorage.clear();
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
 
      localStorage.setItem("token", result.token);
 
      this._roleAuthenticateService.getInfo();
      this._roleAuthenticateService.isAdmin();
      this._roleAuthenticateService.isKapitein();
      this._roleAuthenticateService.isUser();
 
      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user = currentUser;
 
        if (this._roleAuthenticateService.isAdmin()) {
          this.router.navigate(['/admin/dashboard']);
        } else if (this._roleAuthenticateService.isKapitein()) {
          this.router.navigate(['/kapitein/dashboard']);
        } else if (this._roleAuthenticateService.isUser()){
          this.router.navigate(['/gebruiker/dashboard']);
        }
      });
    });
  }
}