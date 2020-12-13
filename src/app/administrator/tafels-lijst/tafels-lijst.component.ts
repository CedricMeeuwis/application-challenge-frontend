import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
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
  myImage;

  constructor(private modalService: NgbModal, private _tafelService: TafelService) { }

  ngOnInit(): void {
    this._tafelService.getTafels().subscribe(result =>
      this.tafels = result
    );
  }

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);

  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {

      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.tafel.foto = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file)

    filereader.onload = () => {

      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
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
    if (!this.tafel.tafelID) {
      const newTafel = new Tafel(this.tafel.naam, this.tafel.bedrijfsnaam, this.tafel.adres, this.tafel.foto, this.tafel.contactTelefoon, this.tafel.contactNaam, this.tafel.contactEmail);
      this._tafelService.addTafel(newTafel).subscribe(result => {
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
      () => this.tafels.splice(this.tafels.findIndex(t => t.tafelID == tafelID), 1)
    );
  }

}
