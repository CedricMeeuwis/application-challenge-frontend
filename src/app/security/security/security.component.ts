import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../models/user-login';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  userLogin: UserLogin = new UserLogin('', '');

  constructor(
    private _authenticateService: AuthenticateService,
    private router: Router) {

  }

  ngOnInit(): void {
  }
  onSubmit() {
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("isAdmin", result.isAdmin.toString());
      localStorage.setItem("isKapitein", result.isKapitein.toString());

      if (result.ploegID == null) {
        result.ploegID = 0
      }

      localStorage.setItem("ploegID", result.ploegID.toString());

      if (result.isAdmin == true) {
        this.router.navigate(['/admin/dashboard']);
      } else if (result.isKapitein == true) {
        this.router.navigate(['/kapitein/dashboard'])
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
