import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Competitie } from 'src/app/shared/models/competitie';
import { MatchContext } from 'src/app/shared/models/matchcontext';
import { Tafel } from 'src/app/shared/models/tafel';
import { User } from 'src/app/shared/models/user';
import { Wedstrijd } from 'src/app/shared/models/wedstrijd';
import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-competitie-beheren',
  templateUrl: './competitie-beheren.component.html',
  styleUrls: ['./competitie-beheren.component.scss']
})
export class CompetitieBeherenComponent implements OnInit {
  competities: Observable<Competitie[]>;
  gekozenCompetitie: Competitie;
  wedstrijden: Observable<Wedstrijd[]>;
  gekozenWedstrijd: Wedstrijd;
  tafels: Tafel[];
  spelers: User[];
  huidigeSpelers: number;
  competitieID: number;

  constructor(private _administratorService: AdministratorService, private modalService: NgbModal) {
    this.resetCompetities()
    this._administratorService.getTafels().subscribe(res => {
      this.tafels = res;
    })

    this._administratorService.getUsers().subscribe(res => {
      this.spelers = res;
    })
  }
  resetCompetities() {
    this.competities = this._administratorService.getCompetities()
  }

  ngOnInit(): void {
  }

  open(content, competitie?) {
    this.gekozenCompetitie = new Competitie("", "", 1, 0);
    if (competitie) {
      this.gekozenCompetitie = competitie;
      this._administratorService.getCompetitie(this.gekozenCompetitie.competitieID).subscribe()
    }
    this.modalService.open(content)
  }

  sendCompetitie() {
    if (this.gekozenCompetitie.competitieID != 0) {
      this._administratorService.updateCompetitie(this.gekozenCompetitie).subscribe(() => {
        this.resetCompetities()
      })
    }
    else {
      this._administratorService.newCompetitie(this.gekozenCompetitie).subscribe(() => {
        this.resetCompetities()
      })
    }
  }

  deletecompetitie(competitieID: number) {
    this._administratorService.deleteCompetitie(competitieID).subscribe(() => {
      this.resetCompetities()
    })
  }

  resetWedstrijden(competitieID) {
    this.wedstrijden = this._administratorService.getWedstrijdenVanCompetitie(competitieID)
  }

  toonWedstrijden(competitie) {
    this.gekozenCompetitie = competitie
    this.resetWedstrijden(competitie.competitieID)
    this.huidigeSpelers = this.gekozenCompetitie.participentAantal
    this.competitieID = this.gekozenCompetitie.competitieID
    console.log(this.competitieID)
  }

  sendWedstrijd() {
    if ((this.gekozenWedstrijd.team1User2ID == null || this.gekozenWedstrijd.team2User2ID == null) && this.huidigeSpelers == 2) {
      alert("gelieve 2 spelers in te geven per team voor een wedstrijd met 2 spelers.")
    } else {
      if (this.gekozenWedstrijd.tafelID == 0 || this.gekozenWedstrijd.team1User1ID == 0 || this.gekozenWedstrijd.team2User1ID == 0) {
        alert("Zowel tafel als de eerste speler in beide teams moeten ingevuld zijn.")
      }
      else {
        if (this.gekozenWedstrijd.team1User1ID == this.gekozenWedstrijd.team1User2ID ||
          this.gekozenWedstrijd.team1User1ID == this.gekozenWedstrijd.team2User1ID ||
          this.gekozenWedstrijd.team1User1ID == this.gekozenWedstrijd.team2User2ID ||
          this.gekozenWedstrijd.team1User2ID == this.gekozenWedstrijd.team2User1ID ||
          this.gekozenWedstrijd.team1User2ID == this.gekozenWedstrijd.team2User2ID && this.huidigeSpelers == 2 ||
          this.gekozenWedstrijd.team2User1ID == this.gekozenWedstrijd.team2User2ID) {
          alert("gelieve geen dubbele spelers in te geven.")
        }
        else {

          if (this.gekozenWedstrijd.wedstrijdID == 0) {

            let matchContext = new MatchContext(0,0,null,null,this.competitieID,null)
            this._administratorService.postMatchContext(matchContext).subscribe(res => {
              this.gekozenWedstrijd.matchContextID = res.matchContextID
              this._administratorService.postWedstrijd(this.gekozenWedstrijd).subscribe()

            })
          }else
          {
            console.log(this.gekozenWedstrijd)
              this._administratorService.updateWedstrijd(this.gekozenWedstrijd).subscribe()
          }
        }
      }
    }
  }

  openWedstrijd(content, wedstrijd?) {
    this.gekozenWedstrijd = new Wedstrijd(0, 0, 0, false, 0, 0, null, null, null, 0, null, null, null, 0, null, 0);
    if (wedstrijd) {
      this.gekozenWedstrijd = wedstrijd;
      console.log(this.gekozenWedstrijd)
    }
    this.modalService.open(content)
  }

  deleteWedstrijd(wedstrijd: Wedstrijd) {
    this._administratorService.deleteWedstrijd(wedstrijd.wedstrijdID).subscribe(() => {
      this._administratorService.deleteMatchContext(wedstrijd.matchContextID).subscribe(() => {
        this.resetWedstrijden(this.gekozenCompetitie.competitieID)
      })
    })
  }
}


