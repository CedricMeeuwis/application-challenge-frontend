import { Component, OnInit } from '@angular/core';
import { MatchContext } from '../../shared/models/matchcontext'
import { GebruikerService } from '../gebruiker.service';
import jwt_decode from "jwt-decode";
import { User } from 'src/app/shared/models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Wedstrijd } from 'src/app/shared/models/wedstrijd';

@Component({
  selector: 'app-overzicht-wedstrijden',
  templateUrl: './overzicht-wedstrijden.component.html',
  styleUrls: ['./overzicht-wedstrijden.component.scss']
})
export class OverzichtWedstrijdenComponent implements OnInit {
  wedstrijden : Wedstrijd[];
  wedstrijd : Wedstrijd;
  userID : number;
  aantalSpellen : number;
  aantalWins : number;
  aantalVerloren: number;
  //aantalDraws : number;
  aantalTournooien: number
  winpercentage : number;
  constructor(private _gebruikerService : GebruikerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    const currentUser = jwt_decode(localStorage.getItem("token"));
    this.userID = currentUser[Object.keys(currentUser)[0]]; 
    this._gebruikerService.getMatches(this.userID).subscribe(result => {
      this.wedstrijden = result
      this.aantalSpellen = this.wedstrijden.length;
      this.aantalWins = this.wedstrijden.filter(w => ((w.team1User1ID == this.userID || w.team1User2ID == this.userID) && w.team1Score>w.team2Score) || ((w.team2User1ID == this.userID || w.team2User2ID == this.userID) && w.team2Score>w.team1Score)).length;
      this.aantalTournooien = this.wedstrijden.filter(w => w.matchContext.tournooi).length;
      //this.aantalDraws = this.wedstrijden.filter(w => w.wedstrijd.team1Score == w.wedstrijd.team2Score).length;
      //this.aantalVerloren = this.aantalSpellen - this.aantalWins - this.aantalDraws;
      this.aantalVerloren = this.aantalSpellen - this.aantalWins;
      this.winpercentage = (this.aantalWins/this.aantalSpellen)*100
    });
  }

  open(content, wedstrijdID) {
    this.wedstrijd = {...this.wedstrijden.find(w => w.matchContextID == wedstrijdID)};
    this.modalService.open(content);
  }
}
