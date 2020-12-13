import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { User } from 'src/app/shared/models/user';
import { AdministratorService } from '../administrator.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscriber } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.scss']
})
export class GebruikersComponent implements OnInit {
  model: NgbDateStruct;
  gebruikers : User[];
  ploegen : Ploeg[];
  gebruiker : User;
  userID : Number;
  datum;
  @Input() max: any;
  now = new Date();
  //gekozenPloeg : number;
  constructor(private _route: ActivatedRoute, private _adminService: AdministratorService, private _router : Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    const currentUser = jwtDecode(localStorage.getItem("token"));
    this.userID = currentUser[Object.keys(currentUser)[0]]; 
    
    this._adminService.getPloegen().subscribe(ploegen => {
      this.ploegen = ploegen
    })
    this._adminService.getUsers().subscribe(gebruikers => {
      this.gebruikers = gebruikers
    })
  }

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);

  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {

      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.gebruiker.foto = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file)

    filereader.onload = () => {

      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }


  //modals
  open(content, userID?) {
    this.gebruiker = new User("","", new Date(), "", false, false, "");
    if(userID){
      this.gebruiker = {...this.gebruikers.find(u => u.userID == userID)}
      if(!this.gebruiker.ploegID){
        this.gebruiker.ploegID = 0;
      }
    }
    this.datum = this.gebruiker.geboortedatum;
    this.modalService.open(content)
  }

  sendUser(){
    if(this.datum != this.gebruiker.geboortedatum){ //bij updaten van datum met de date picker zet hij die 1 dag ervoor in de api om een of andere reden
      this.gebruiker.geboortedatum.setDate(this.gebruiker.geboortedatum.getDate() + 1);
    }
    if(this.gebruiker.ploegID == 0){
      this.gebruiker.ploegID = null;
    }    
    if(this.gebruiker.userID){
      this._adminService.updateUser(this.gebruiker.userID, this.gebruiker).subscribe(result => {
        if(this.datum != this.gebruiker.geboortedatum){ //lokaal dan weer niet dus moet die een dag terug gezet worden in de lokale array
          this.gebruiker.geboortedatum.setDate(this.gebruiker.geboortedatum.getDate() - 1);
        }
        this.gebruiker.ploeg = this.ploegen.find(x => x.ploegID === this.gebruiker.ploegID)
        var pos = this.gebruikers.findIndex(u => u.userID == this.gebruiker.userID)
        this.gebruikers.splice(pos,1)
        this.gebruikers.splice(pos,0,this.gebruiker)
      })
    }else{
      this._adminService.postUser(this.gebruiker).subscribe(result => {
        result.ploeg = this.ploegen.find(x => x.ploegID === this.gebruiker.ploegID)
        if(this.datum != this.gebruiker.geboortedatum){ //lokaal dan weer niet dus moet die een dag terug gezet worden in de lokale array
          this.gebruiker.geboortedatum.setDate(this.gebruiker.geboortedatum.getDate() - 1);
        }
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
