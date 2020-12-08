import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { User } from 'src/app/shared/models/user';
import { AdministratorService } from '../administrator.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.scss']
})
export class GebruikersComponent implements OnInit {
  geboortedatum : NgbDateStruct
  gebruikers : User[];
  ploegen : Ploeg[];
  gebruiker : User;
  //gekozenPloeg : number;
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
    if(userID){
      this.gebruiker = {...this.gebruikers.find(u => u.userID == userID)}
      if(!this.gebruiker.ploegID){
        this.gebruiker.ploegID == 0;
      }
    }
    this.modalService.open(content)
  }

  sendUser(){
    if(this.gebruiker.ploegID == 0){
      this.gebruiker.ploegID = null;
    }    
    if(this.gebruiker.userID){
      this._adminService.updateUser(this.gebruiker.userID, this.gebruiker).subscribe(result => {
        this.gebruiker.ploeg = this.ploegen.find(x => x.ploegID === this.gebruiker.ploegID)
        var pos = this.gebruikers.findIndex(u => u.userID == this.gebruiker.userID)
        this.gebruikers.splice(pos,1)
        this.gebruikers.splice(pos,0,this.gebruiker)
      })
    }else{
      this._adminService.postUser(this.gebruiker).subscribe(result => {
        result.ploeg = this.ploegen.find(x => x.ploegID === this.gebruiker.ploegID)
        this.gebruikers.push(result)
      })
    }
  }

  deleteUser(userID){
    this._adminService.deleteUser(userID).subscribe(result =>
      this.gebruikers.splice(this.gebruikers.findIndex(u => u.userID == userID),1)
    );
  }
}
