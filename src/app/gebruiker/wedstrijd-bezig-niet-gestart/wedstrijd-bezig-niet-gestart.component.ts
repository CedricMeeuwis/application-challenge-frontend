import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';
import { Wedstrijd } from 'src/app/shared/models/wedstrijd';
import { GebruikerService } from '../gebruiker.service';

@Component({
  selector: 'app-wedstrijd-bezig-niet-gestart',
  templateUrl: './wedstrijd-bezig-niet-gestart.component.html',
  styleUrls: ['./wedstrijd-bezig-niet-gestart.component.scss']
})
export class WedstrijdBezigNietGestartComponent implements OnInit {

  wedstrijden: Observable<Wedstrijd[]>
  wedstrijd: Wedstrijd;
  userID: number
  constructor(private _gebruikerService: GebruikerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    const currentUser = jwt_decode(localStorage.getItem("token"));
    this.userID = currentUser[Object.keys(currentUser)[0]];
    this.wedstrijden = this._gebruikerService.getWedstrijdenBusyOrNotStarted(this.userID)
  }

  open(content, wedstrijd) {
    this.wedstrijd = wedstrijd
    this.modalService.open(content);
  }

  begin() {
    this.wedstrijd.bezig = true
    this.wedstrijd.team1User1.ploeg.naam
    this._gebruikerService.updateWedstrijd(this.wedstrijd).subscribe()
  }

  scoreVerander(team, verandering: number) {
    const originalName1 = this.wedstrijd.team1User1.ploeg.naam
    const originalName2 = this.wedstrijd.team2User1.ploeg.naam

    if (this.wedstrijd.team1User1.ploeg.naam == this.wedstrijd.team2User1.ploeg.naam) {
      this.wedstrijd.team1User1.ploeg.naam += "1"
      this.wedstrijd.team2User1.ploeg.naam += "2"
    }
    if (team == this.wedstrijd.team1User1.ploeg.naam) {
      this.wedstrijd.team1Score += verandering
    }
    if (team == this.wedstrijd.team2User1.ploeg.naam) {
      this.wedstrijd.team2Score += verandering

    }

    if(this.wedstrijd.team2Score ==11)
    {
      this.wedstrijd.team2Score =10
    }
    if(this.wedstrijd.team1Score ==11)
    {
      this.wedstrijd.team1Score =10
    }

    if(this.wedstrijd.team2Score ==-1)
    {
      this.wedstrijd.team2Score =0
    }
    if(this.wedstrijd.team1Score ==-1)
    {
      this.wedstrijd.team1Score =0
    }

    if (this.wedstrijd.team1User1.ploeg.naam == this.wedstrijd.team2User1.ploeg.naam) {
      this.wedstrijd.team1User1.ploeg.naam = originalName1
      this.wedstrijd.team2User1.ploeg.naam = originalName2
    }

    this._gebruikerService.updatePloeg(this.wedstrijd.team1User1.ploeg).subscribe()
    this._gebruikerService.updatePloeg(this.wedstrijd.team2User1.ploeg).subscribe()
  }

}
