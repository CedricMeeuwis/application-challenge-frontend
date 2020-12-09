import { Component, OnInit } from '@angular/core';
import { MatchContext } from '../../shared/models/matchcontext'
import { GebruikerService } from '../gebruiker.service';
import jwt_decode from "jwt-decode";
import { User } from 'src/app/shared/models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overzicht-wedstrijden',
  templateUrl: './overzicht-wedstrijden.component.html',
  styleUrls: ['./overzicht-wedstrijden.component.scss']
})
export class OverzichtWedstrijdenComponent implements OnInit {
  wedstrijden : MatchContext[];
  wedstrijd : MatchContext;
  userID : number;
  aantalSpellen : number;
  aantalWins : number;
  aantalVerloren: number;
  //aantalDraws : number;
  winpercentage : number;
  constructor(private _gebruikerService : GebruikerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    const currentUser = jwt_decode(localStorage.getItem("token"));
    this.userID = currentUser[Object.keys(currentUser)[0]]; 
    this._gebruikerService.getMatches(this.userID).subscribe(result => {
      this.wedstrijden = result
      this.aantalSpellen = this.wedstrijden.length;
      this.aantalWins = this.wedstrijden.filter(w => ((w.wedstrijd.team1User1ID == this.userID || w.wedstrijd.team1User2ID == this.userID) && w.wedstrijd.team1Score>w.wedstrijd.team2Score) || ((w.wedstrijd.team2User1ID == this.userID || w.wedstrijd.team2User2ID == this.userID) && w.wedstrijd.team2Score>w.wedstrijd.team1Score)).length;
      //this.aantalDraws = this.wedstrijden.filter(w => w.wedstrijd.team1Score == w.wedstrijd.team2Score).length;
      //this.aantalVerloren = this.aantalSpellen - this.aantalWins - this.aantalDraws;
      this.aantalVerloren = this.aantalSpellen - this.aantalWins;
      this.winpercentage = (this.aantalWins/this.aantalSpellen)*100
    });
  }

  open(content, wedstrijdID) {
    this.wedstrijd = {...this.wedstrijden.find(w => w.matchContextID == wedstrijdID)};
    console.log(this.wedstrijd)
    this.modalService.open(content);
  }
}
