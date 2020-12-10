import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../security/services/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private _authenticateService: AuthenticateService) { }

  ngOnInit(): void {
  }
  direct(){
    if(this._authenticateService.isLoggedIn()){
      this.router.navigate(["login"]);
    }else{
      this.router.navigate(["wedstrijde"]);
    }
  }

}
