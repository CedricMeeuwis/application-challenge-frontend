import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { MatchContext } from '../../shared/models/matchcontext';
import { Wedstrijd } from '../../shared/models/wedstrijd';
import { AdministratorService } from '../administrator.service';

enum Bezig { NogTeSpelen, Bezig, Gespeeld };

@Component({
  selector: 'app-manage-tournooi',
  templateUrl: './manage-tournooi.component.html',
  styleUrls: ['./manage-tournooi.component.scss']
})
export class ManageTournooiComponent implements OnInit {
  wedstrijden: Wedstrijd[];
  orderedWedstrijden: Wedstrijd[][];
  users: User[];
  search = "";
  canEdit = true;
  toDelete = null;

  nieuwWedstrijd: Wedstrijd = new Wedstrijd(0,0, Bezig.NogTeSpelen, false);
  emptyUser = new User("","", new Date(),"", false, false, "", -1);
  team1user1: User = this.emptyUser;
  team1user2: User = this.emptyUser;
  team2user1: User = this.emptyUser;
  team2user2: User = this.emptyUser;

  winnaar1: User;
  winnaar2: User;

  constructor(private route: ActivatedRoute, private _administratoService: AdministratorService, private modalService: NgbModal) {
    _administratoService.wedstrijden.subscribe(val=>{
      this.wedstrijden = val;
      this.checkIfEditable();
      this.filterAvailableUsers();
      this.checkVoorWinneer();
      this.splitData(val);
    });
  }

  ngOnInit(): void {
    this.refresh();
  }
  open(content, value?) {
    this.team1user1 = this.emptyUser;
    this.team1user2 = this.emptyUser;
    this.team2user1 = this.emptyUser;
    this.team2user2 = this.emptyUser;
    this.toDelete = value;
    this.modalService.open(content);
  }
  submitWedstrijd(){
    this.nieuwWedstrijd.team1User1ID = this.team1user1.userID;
    this.nieuwWedstrijd.team2User1ID = this.team2user1.userID;

    if(this.team1user2.userID != -1 && this.team2user2.userID != -1){
      this.nieuwWedstrijd.team1User2ID = this.team1user2.userID;
      this.nieuwWedstrijd.team2User2ID= this.team2user2.userID;
    }
    let _matchcontext = new MatchContext(1, this.wedstrijden.length + 1, Number(this.route.snapshot.params['id']));
    this._administratoService.postMatchContext(_matchcontext).subscribe(val =>{
      this.nieuwWedstrijd.matchContextID = val.matchContextID;
      this._administratoService.postWedstrijd(this.nieuwWedstrijd).subscribe(val =>{
        this.refresh();
      });
    });
  }
  deleteWedstrijd(){
    this._administratoService.deleteWedstrijd(this.toDelete).subscribe(val =>{
      this.refresh();
    });
    this.modalService.dismissAll();
  }
  private refresh(){
    this._administratoService.getUsersHasPloeg().subscribe(val =>{
      this.users = val;
      this._administratoService.getWedstrijdenVanTournooi(this.route.snapshot.params['id']).subscribe();
    });
  }
  //Internal functioning
  private checkIfEditable(){
    if(this.wedstrijden != null && this.wedstrijden.length > 0){
      for(let i = 0; i < this.wedstrijden.length; i++){
        if(this.wedstrijden[i].matchContext.tournooiNiveau > 1 
          || this.wedstrijden[i].bezig != Bezig.NogTeSpelen
          || this.wedstrijden[i].team1Score > 0
          || this.wedstrijden[i].team2Score > 0){
          this.canEdit = false;
        }
      }
    }else{
      this.canEdit = true;
    }
  }
  private filterAvailableUsers(){
    if(this.wedstrijden != null && this.wedstrijden.length > 0 && this.users != null && this.canEdit){
      for(let i = 0; i < this.wedstrijden.length; i++){
        for(let j = 0; j < this.users.length; j++){
          let check = this.users[j].userID 
          if(this.wedstrijden[i].team1User1ID == check 
              || this.wedstrijden[i].team1User2ID == check  
              || this.wedstrijden[i].team2User1ID == check 
              || this.wedstrijden[i].team2User2ID == check )
          {
            this.users.splice(j, 1);
            j--;
          }
        }
      }
    }
  }
  private checkVoorWinneer(){
    if(this.wedstrijden != null && this.wedstrijden.length > 0){
      let wedstrijdToCheck = this.wedstrijden[this.wedstrijden.length-1];
      let niveauCheck = wedstrijdToCheck.matchContext.tournooiNiveau - 1;
      let som = 0;
      for(let i = 0; i < this.wedstrijden.length; i++){
        if(niveauCheck == this.wedstrijden[i].matchContext.tournooiNiveau && this.wedstrijden[i].akkoord){
          som++;
        }
      }
      if(som == 2 && wedstrijdToCheck.akkoord){
        if(wedstrijdToCheck.team1Score > wedstrijdToCheck.team2Score){
          this.winnaar1 = wedstrijdToCheck.team1User1;
          this.winnaar2 = wedstrijdToCheck.team1User2;
        }
        if(wedstrijdToCheck.team2Score > wedstrijdToCheck.team1Score){
          this.winnaar1 = wedstrijdToCheck.team2User1;
          this.winnaar2 = wedstrijdToCheck.team2User2;
        }
      }
    }
  }
  private splitData(data){
    this.orderedWedstrijden = [];
    if(data != null && data.length > 0){
      let newRow: Wedstrijd[] = [];
      for(let i = 0; i < data.length; i++){
        if(i != 0 && data[i].matchContext.tournooiNiveau != data[i-1].matchContext.tournooiNiveau){
          this.orderedWedstrijden.push(newRow);
          newRow = [];
        }
        newRow.push(data[i]);
      }
      this.orderedWedstrijden.push(newRow);
    }
  }
}
