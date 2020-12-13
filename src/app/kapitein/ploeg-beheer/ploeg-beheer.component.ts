import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscriber } from 'rxjs';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { User } from 'src/app/shared/models/user';
import { KapiteinService } from '../kapitein.service';

@Component({
  selector: 'app-ploeg-beheer',
  templateUrl: './ploeg-beheer.component.html',
  styleUrls: ['./ploeg-beheer.component.scss']
})
export class PloegBeheerComponent implements OnInit {

  leden: User[];
  usersZonderPloeg: User[];
  selectedLid: User;
  ploeg: Ploeg;
  selectedUserID: string;
  myImage;

  constructor(private _kapiteinService: KapiteinService, private modalService: NgbModal, private router: Router) {
    this._kapiteinService.getMijnPloeg().subscribe(
      result => this.ploeg = result
    );
    this._kapiteinService.getMijnPloegUsers().subscribe(
      result => this.leden = result
    );
    this.loadUsersZonderPloeg();
  }

  loadUsersZonderPloeg() {
    this._kapiteinService.getUsersZonderPloeg().subscribe(
      result => this.usersZonderPloeg = result
    );
  }

  ngOnInit(): void {
  }

  //Open modals
  open(content, lid?: User) {
    if(lid) {
      this.selectedLid = lid;
    }
    this.modalService.open(content);
  }

  updatePloeg() {
    this._kapiteinService.updatePloeg(this.ploeg).subscribe(
    );
  }

  addLid() {
    var addedMember;
    this._kapiteinService.addLid(Number(this.selectedUserID)).subscribe(
      () => {
        this.leden.push(addedMember);
        this.loadUsersZonderPloeg();
        this.selectedUserID = "0";
      }
    );
  }

  kickLid() {
    this._kapiteinService.removeLid(this.selectedLid.userID).subscribe(
      () => {
        this.leden.splice(this.leden.indexOf(this.selectedLid) ,1)
        this.loadUsersZonderPloeg();
        this.selectedLid = new User('','', null, '', false, false);
      }
    );
  }

  setKapitein() {
    this._kapiteinService.setKapitein(this.selectedLid.userID).subscribe(
      () => {
        localStorage.clear();
        this.router.navigate(['']);
      }
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
      this.ploeg.ploegFoto = d;
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

}
