import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Challenge } from 'src/app/shared/models/challenge';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { User } from 'src/app/shared/models/user';
import { GebruikerService } from '../gebruiker.service';

@Component({
  selector: 'app-ploeg-details',
  templateUrl: './ploeg-details.component.html',
  styleUrls: ['./ploeg-details.component.scss']
})
export class PloegDetailsComponent implements OnInit {

  ploegen: Ploeg[];
  ploeg: Ploeg;
  leden: User[];
  challenges: Challenge[];
  openChallenges: Challenge[];
  newChallenge: Challenge = new Challenge(0, false, false);
  uitgedaagdePloegID: string;
  stats: Object;

  constructor(private _gebruikerService: GebruikerService, private modalService: NgbModal) {
    this._gebruikerService.getMijnPloeg().subscribe(
      result => this.ploeg = result,
      error => console.log(error),
      () => this.loadRest()
    );
  }

  loadRest() {
    this.loadLeden();
    this.loadChallenges();
    this.loadPloegen();
    this.loadStats();
  }

  loadLeden() {
    this._gebruikerService.getMijnPloegUsers().subscribe(
      result => this.leden = result
    )
  }

  loadChallenges() {
    this._gebruikerService.getMijnPloegChallenges().subscribe(
      result => this.challenges = result
    );
    this._gebruikerService.getMijnPloegOpenChallenges().subscribe(
      result => this.openChallenges = result
    );
  }

  loadPloegen() {
    this._gebruikerService.getPloegen().subscribe(
      result => this.ploegen = result
    );
  }

  loadStats() {
    this._gebruikerService.getMijnStats().subscribe(
      result => this.stats = result
    );
  }

  //Open modals
  open(content) {
    this.modalService.open(content)
  }
  
  challengePloeg() {
    this.newChallenge.uitgedaagdePloegID = Number(this.uitgedaagdePloegID);
    this._gebruikerService.createChallenge(this.newChallenge).subscribe(
      result => console.log(result),
      err => console.log(err.message),
      () => {
        console.log("Challenge verzonden")
        this.loadChallenges();
      }
    );
  }

  challengeAnnuleer(challengeID: number) {
    this._gebruikerService.deleteChallenge(challengeID).subscribe(
      result => console.log(result),
      err => console.log(err.message),
      () => {
        console.log("Challenge ingetrokken")
        this.loadChallenges();
      }
    );
  }

  challengeResponse(challengeID: number, response: boolean) {
    this._gebruikerService.setChallengeReactie(challengeID, response).subscribe(
      result => console.log(result),
      err => console.log(err.message),
      () => {
        console.log("Challenge beantwoord")
        this.loadChallenges();
      }
    );
  }

  openStats() {
    console.log("WIP");
  }

  ngOnInit(): void {
  }

}
