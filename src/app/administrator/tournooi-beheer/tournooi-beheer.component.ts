import { Component, OnInit } from '@angular/core';
import { Tournooi } from '../../shared/models/tournooi';
import { AdministratorService } from '../administrator.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tournooi-beheer',
  templateUrl: './tournooi-beheer.component.html',
  styleUrls: ['./tournooi-beheer.component.scss']
})
export class TournooiBeheerComponent implements OnInit {
  tournooien: Tournooi[];
  modalTournooi = new Tournooi("");

  constructor(private _administratorService: AdministratorService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this._administratorService.getAllTournoois().subscribe(val =>{
      this.tournooien = val;
    });
  }
  open(content, tournooi?) {
    this.modalTournooi = new Tournooi("");
    if(tournooi){
      this.modalTournooi = tournooi;
    }
    this.modalService.open(content)
  }
  sendTournooi(){
    if(this.modalTournooi.tournooiID != null){
      this._administratorService.updateTournooi(this.modalTournooi).subscribe();
    }else{
      this._administratorService.newTournooi(this.modalTournooi).subscribe();
    }
  }
  deleteTournooi(id){
    this._administratorService.deleteTournooi(id).subscribe();
  }
}
