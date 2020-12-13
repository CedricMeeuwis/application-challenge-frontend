import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/security/models/current-user.model';
import { RoleAuthenticateService } from 'src/app/security/services/role-authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: CurrentUser;

  constructor(
    private router: Router,
    private roleAuthenticateService: RoleAuthenticateService,
  ) { 
    roleAuthenticateService.user.subscribe(val =>{
      this.currentUser = val;
    });
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
    this.roleAuthenticateService.getInfo();
  }

  ngOnInit(): void {
    this.roleAuthenticateService.getInfo();
  }

}
