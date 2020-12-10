import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Wedstrijd } from '../../shared/models/wedstrijd';
import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-betwisting',
  templateUrl: './betwisting.component.html',
  styleUrls: ['./betwisting.component.scss']
})
export class BetwistingComponent implements OnInit {
  betwistingen: Wedstrijd[];
  betwisting: Wedstrijd;
  errorBoodschap = "";

  constructor(private _administratorService: AdministratorService, private modalService: NgbModal) { 
    _administratorService.betwistingen.subscribe(val =>{
      this.betwistingen = val;
    });
  }

  ngOnInit(): void {
    this._administratorService.getBetwistingen();
  }
  open(content, data){
    //nieuw object, zodat de vorige niet wordt aangepast
    this.betwisting = new Wedstrijd(data.team1Score, data.team2Score, data.bezig, 
      data.akkoord, data.wedstrijdID, data.team1User1ID, 
      data.team1User1, data.team1User2ID, data.team1User2, 
      data.team2User1ID, data.team2User1, data.team2User2ID,
      data.team2User2, data.matchContextID, data.matchContext, 
      data.tafelID, data.tafel);
    console.log(this.betwisting);
    this.modalService.open(content);
    this.errorBoodschap = "";
  }
  beoordeel(){
    if(this.betwisting.team1Score == this.betwisting.team2Score 
      || (this.betwisting.team1Score < 10 && this.betwisting.team2Score < 10)
      || (this.betwisting.team1Score > 10 || this.betwisting.team2Score > 10)){
      this.errorBoodschap = "Foute score gegevens";
    }else{
      this.betwisting.akkoord = true;
      console.log(this.betwisting);
      this._administratorService.changeWedstrijd(this.betwisting).subscribe(val=>{
        this._administratorService.getBetwistingen();
      });
      this.modalService.dismissAll();
    }
  }
}
