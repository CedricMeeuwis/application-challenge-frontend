import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleAuthenticateService } from 'src/app/security/services/role-authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public roleAuthenticateService: RoleAuthenticateService,
  ) { }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
