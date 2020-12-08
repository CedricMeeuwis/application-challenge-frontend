import { Component, OnInit } from '@angular/core';
import { Ploeg } from 'src/app/shared/models/ploeg';
import { User } from 'src/app/shared/models/user';
import { KapiteinService } from '../kapitein.service';

@Component({
  selector: 'app-ploeg-aanmaken',
  templateUrl: './ploeg-aanmaken.component.html',
  styleUrls: ['./ploeg-aanmaken.component.scss']
})
export class PloegAanmakenComponent implements OnInit {
  ploeg : Ploeg = new Ploeg("","","","",0);
  userLijst : User[];
  filterTekst : string = "";
  filterLijst : User[];
  gekozenUsers : User[] = [];
  constructor(private _kapiteinService : KapiteinService) { }

  ngOnInit(): void {
    this._kapiteinService.getUsers().subscribe(result => {
      this.userLijst = result;
      this.filterLijst = result;
      console.log(result)
    })
  }
  filter(){
    this.filterLijst = [];
    this.filterLijst = this.userLijst.filter(user => {return user.naam.toLowerCase().includes(this.filterTekst.toLowerCase())});
  }
  check(user){
    if(this.gekozenUsers.filter(u => u.userID==user.userID).length == 0){
      this.gekozenUsers.push(user)
    }else{
      var removeIndex = this.gekozenUsers.map(item => item.userID).indexOf(user.userID);
      ~removeIndex && this.gekozenUsers.splice(removeIndex, 1);
    }
  }

  onSubmit(){
    console.log(this.ploeg)
  }

}
