import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from '../../shared/models/tafel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TafelService } from '../services/tafel.service';

@Component({
  selector: 'app-tafels-lijst',
  templateUrl: './tafels-lijst.component.html',
  styleUrls: ['./tafels-lijst.component.scss']
})
export class TafelsLijstComponent implements OnInit {
  tafels: Tafel[];
  tafel: Tafel;

  constructor(private modalService: NgbModal, private _tafelService: TafelService) { }

  ngOnInit(): void {
    this._tafelService.getTafels().subscribe(result =>
      this.tafels = result
    );
  }

  //Open modals
  open(content, tafel?: Tafel) {
    if (!tafel) {
      this.tafel = new Tafel('', '', '', '', '', '', '');
    }
    else {
      this.tafel = tafel;
    }
    this.modalService.open(content)
  }

  sendTafel() {
    console.log(this.tafel)
    if (!this.tafel.tafelID) {
      this._tafelService.addTafel(this.tafel).subscribe(result => {
        this.tafels.push(result)
      })
    }
    else {
      this._tafelService.updateTafel(this.tafel.tafelID, this.tafel).subscribe(result => {
        var pos = this.tafels.findIndex(t => t.tafelID == this.tafel.tafelID)
        this.tafels.splice(pos, 1)
        this.tafels.splice(pos, 0, this.tafel)
      })
    }
  }

  deleteTafel(tafelID: number) {
    this._tafelService.deleteTafel(tafelID).subscribe(
      result => console.log(result),
      err => console.log(err),
      () => this.tafels.splice(this.tafels.findIndex(t => t.tafelID == tafelID), 1)
    );
  }

}
