import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleAuthenticateService } from 'src/app/security/services/role-authenticate.service';
import { AuthenticateService } from '../../security/services/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private _roleAuthenticateService: RoleAuthenticateService) { }

  ngOnInit(): void {
  }
  direct(){
    if(this._roleAuthenticateService.isLoggedIn()){
      this.router.navigate(["user/dashboard"]);
    }else if (this._roleAuthenticateService.isAdmin()){
      this.router.navigate(["admin/dashboard"]);
    } else if (this._roleAuthenticateService.isKapitein()){
      this.router.navigate(["kapitein/dashboard"]);
    } else{
      this.router.navigate(["login"]);
    }
  }

}
