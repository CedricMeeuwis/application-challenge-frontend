import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { AdministratorService } from '../administrator.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-ploegen-beheren',
  templateUrl: './ploegen-beheren.component.html',
  styleUrls: ['./ploegen-beheren.component.scss']
})
export class PloegenBeherenComponent implements OnInit {
  ploegen: Observable<Ploeg[]>;
  gekozenPloeg: Ploeg;
  ploeg: Ploeg;
  users?: User[];
  nieuweKapitein: User;
  huidigeKapitein: User;
  kapiteinid: number

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
      this._administratorService.getUsersbyPloeg(ploeg.ploegID).subscribe(users => {
        this.users = users
        this.huidigeKapitein = this.users.find(u => u.isKapitein == true)
        this.kapiteinid = this.huidigeKapitein.userID
      })
    }
    else {
      this._administratorService.getUsersZonderPloeg().subscribe(users => {
        this.users = users
      })
    }
    this.modalService.open(content)
  }

  sendPloeg() {
    if (this.gekozenPloeg.ploegID != 0) {

      console.log(this.kapiteinid)
      console.log(this.huidigeKapitein)
      this._administratorService.getUser(this.kapiteinid).subscribe(nieuwekapitein => {
        this.nieuweKapitein = nieuwekapitein
        this.nieuweKapitein.isKapitein = true
        this._administratorService.updateUser(this.nieuweKapitein.userID, this.nieuweKapitein).subscribe()
      }
      )

      this.huidigeKapitein.isKapitein = false
      this._administratorService.updateUser(this.huidigeKapitein.userID, this.huidigeKapitein).subscribe()
      this._administratorService.updatePloeg(this.gekozenPloeg).subscribe(() =>
        this.resetPloegen()
      );
    } else {

      this._administratorService.newPloeg(this.gekozenPloeg).subscribe(ploeg => {
        this.resetPloegen()
        this._administratorService.getUser(this.kapiteinid).subscribe(nieuwekapitein => {
          this.nieuweKapitein = nieuwekapitein
          this.nieuweKapitein.isKapitein = true
          this.nieuweKapitein.ploegID = ploeg.ploegID
          alert(this.nieuweKapitein.ploegID)
          this._administratorService.updateUser(this.nieuweKapitein.userID, this.nieuweKapitein).subscribe()
        }
        )
      }
      )
    }
  }

  resetPloegen() {
    this.ploegen = this._administratorService.getPloegen()
  }

}
