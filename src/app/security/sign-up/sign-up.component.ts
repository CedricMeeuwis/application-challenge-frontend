import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscriber } from 'rxjs';
import { AdministratorService } from 'src/app/administrator/administrator.service';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Input() max: any;
  now = new Date();
  model: NgbDateStruct;
  gebruikers: User[];
  ploegen: Ploeg[];
  gebruiker: User = new User("","",new Date(),"",false,false);
  datum;
  submitted = false;

  constructor(
    private _route: ActivatedRoute,
    private _adminService: AdministratorService,
    private _router: Router
  ) { }

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);

  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {

      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.gebruiker.foto = d;
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

  onSubmit() {
    this.gebruiker.geboortedatum.setDate(this.gebruiker.geboortedatum.getDate() + 1);
    this.submitted = true;
    this._adminService.postUser(this.gebruiker).subscribe(result => {
      debugger;
      this._router.navigate(['login']);
    })
  }

  ngOnInit(): void {
    this.gebruiker.geboortedatum = null;
  }

}
