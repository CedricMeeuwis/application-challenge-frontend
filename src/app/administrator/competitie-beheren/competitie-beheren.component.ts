import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Competitie } from 'src/app/shared/models/competitie';
import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-competitie-beheren',
  templateUrl: './competitie-beheren.component.html',
  styleUrls: ['./competitie-beheren.component.scss']
})
export class CompetitieBeherenComponent implements OnInit {
  competities: Observable<Competitie[]>;
  gekozenCompetitie: Competitie;

  constructor(private _administratorService: AdministratorService, private modalService: NgbModal) {
    this.resetCompetities()
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

  deletecompetitie(competitieID: number)
  {
    this._administratorService.deleteCompetitie(competitieID).subscribe(()=> {
      this.resetCompetities()
    })
  }
}


