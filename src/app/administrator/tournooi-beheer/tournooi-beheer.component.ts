import { Component, OnInit } from '@angular/core';
import { Tournooi } from '../../shared/models/tournooi';
import { AdministratorService } from '../administrator.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournooi-beheer',
  templateUrl: './tournooi-beheer.component.html',
  styleUrls: ['./tournooi-beheer.component.scss']
})
export class TournooiBeheerComponent implements OnInit {
  tournooien: Tournooi[];
  modalTournooi = new Tournooi("");

  constructor(private router: Router, private _administratorService: AdministratorService, private modalService: NgbModal) {
    _administratorService.tournooien.subscribe(val =>{
      this.tournooien = val;
    });
  }

  ngOnInit(): void {
    this.refresh();
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
      this._administratorService.updateTournooi(this.modalTournooi).subscribe(val =>{
        this.refresh();
      });
    }else{
      this._administratorService.newTournooi(this.modalTournooi).subscribe(val =>{
        this.refresh();
      });
    }
  }
  deleteTournooi(id){
    this._administratorService.deleteTournooi(id).subscribe(val =>{
      this.refresh();
    });
    this.modalService.dismissAll();
  }
  manageTournooi(id){
    this.router.navigate(['manage-tournooi/' + id]);
  }
  private refresh(){
    this._administratorService.getAllTournoois();
  }
}
