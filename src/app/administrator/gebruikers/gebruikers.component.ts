import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { User } from 'src/app/shared/models/user';
import { AdministratorService } from '../administrator.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.scss']
})
export class GebruikersComponent implements OnInit {
  gebruikers : User[];
  ploegen : Ploeg[];
  gebruiker : User;
  gekozenPloeg : number;
  constructor(private _route: ActivatedRoute, private _adminService: AdministratorService, private _router : Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this._adminService.getPloegen().subscribe(ploegen => {
      this.ploegen = ploegen
    })
    this._adminService.getUsers().subscribe(gebruikers => {
      this.gebruikers = gebruikers
    })
  }

  //modals
  open(content, userID?) {
    this.gebruiker = new User("","",new Date(),"","", false);
    this.gekozenPloeg = 0;
    if(userID){
      this.gebruiker = {...this.gebruikers.find(u => u.userID == userID)}
      
    }
    if(this.gebruiker.ploegID != 0){
      this.gekozenPloeg = this.gebruiker.ploegID;
    }
    this.modalService.open(content)
  }

  sendUser(){
    console.log(this.gebruiker)
    if(this.gebruiker.userID){
      this._adminService.postUser(this.gebruiker).subscribe(result => {
        this.gebruikers.push(result)
        //this.toastService.show('Journalist '+ result.firstName + " " + result.lastName + " aangemaakt", { classname: 'bg-success text-light', delay: 3000 });
      })
    }else{
      console.log(this.gebruiker)
      this._adminService.updateUser(this.gebruiker.userID, this.gebruiker).subscribe(result => {
        var pos = this.gebruikers.findIndex(u => u.userID == this.gebruiker.userID)
        this.gebruikers.splice(pos,1)
        this.gebruikers.splice(pos,0,this.gebruiker)
        //this.toastService.show('Journalist '+ this.user.firstName + " " + this.user.lastName + " geupdated", { classname: 'bg-success text-light', delay: 3000 });
      })
    }
  }
}
