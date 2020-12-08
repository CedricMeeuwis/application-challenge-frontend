import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { AdministratorService } from '../administrator.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-ploegen-beheren',
  templateUrl: './ploegen-beheren.component.html',
  styleUrls: ['./ploegen-beheren.component.scss']
})
export class PloegenBeherenComponent implements OnInit {
  ploegen: Observable<Ploeg[]>;
  gekozenPloeg: Ploeg;
  ploeg: Ploeg;
  constructor(private _administratorService: AdministratorService, private modalService: NgbModal) {
    this.resetPloegen()
  }

  ngOnInit(): void {
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
      this.gekozenPloeg.ploegFoto = d;
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

  deletegroep(groepID) {
    this._administratorService.deleteArticle(groepID).subscribe(() =>
      this.resetPloegen()
    )
  }

  open(content, ploeg?) {
    this.gekozenPloeg = new Ploeg("", "", "", "", 0, 0);
    if (ploeg) {
      this.gekozenPloeg = ploeg;
    }
    this.modalService.open(content)
  }

  sendPloeg() {
    if(this.gekozenPloeg.ploegID != 0){
      this._administratorService.updatePloeg(this.gekozenPloeg).subscribe(() =>
      this.resetPloegen()
      );
    }else{
      this._administratorService.newPloeg(this.gekozenPloeg).subscribe(() =>
      this.resetPloegen());
    }
  }

  resetPloegen() {
    this.ploegen = this._administratorService.getPloegen()
  }

}
