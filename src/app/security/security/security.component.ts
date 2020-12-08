import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  userLogin: UserLogin = new UserLogin('', '');

  constructor(private _authenticateService : AuthenticateService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("isAdmin", result.isAdmin.toString())
      localStorage.setItem("isKapitein", result.isKapitein.toString())
      if(result.ploegID == null)
      {
        result.ploegID =0
      }
      localStorage.setItem("ploegID", result.ploegID.toString())
      alert(result.isKapitein)
    });
  }
}
