import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ploeg } from '../shared/models/ploeg';
import { User } from '../shared/models/user';
import { Tafel } from '../shared/models/tafel';
import { Tournooi } from '../shared/models/tournooi';
import { Wedstrijd } from '../shared/models/wedstrijd';
import { MatchContext } from '../shared/models/matchcontext';
import { Competitie } from '../shared/models/competitie';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  tournooien = new BehaviorSubject<Tournooi[]>(null);
  tournooiUrl = "https://localhost:44348/api/Tournooi";
  wedstrijden = new BehaviorSubject<Wedstrijd[]>(null);
  wedstrijdUrl = "https://localhost:44348/api/Wedstrijd";
  matchContextUrl = "https://localhost:44348/api/MatchContext";
  betwistingen = new BehaviorSubject<Wedstrijd[]>(null);

  constructor(private http : HttpClient) { }

  //get Users voor admin
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/");
  }
  //get Users met een ploeg
  getUsersHasPloeg() : Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/Ploeg");
  }

  getUser(userID: number) : Observable<User>{
    return this.http.get<User>("https://localhost:44348/api/user/" + userID);
  }

  getUsersbyPloeg(ploegId: number) : Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/Ploeg/" + ploegId);
  }
  getUsersZonderPloeg() : Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/Ploegloos");
  }
  //post User voor admin
  postUser(user : User){
    return this.http.post<User>("https://localhost:44348/api/User/",user);
  }
  //update User voor admin
  updateUser(userID : number, user : User){
    return this.http.put<User>("https://localhost:44348/api/User/"+userID, user);
  }
  //delete User voor admin
  deleteUser(userID : number){
    return this.http.delete<User>("https://localhost:44348/api/User/"+userID);
  }
  //get ploegen
  getPloegen() : Observable<Ploeg[]>{
    return this.http.get<Ploeg[]>("https://localhost:44348/api/Ploeg/");
  }

  deletePloeg(ploegID: number)
  {
    return this.http.delete<Ploeg>("https://localhost:44348/api/ploeg/" + ploegID);
  }

  newPloeg(ploeg: Ploeg) {
    return this.http.post<Ploeg>("https://localhost:44348/api/ploeg", ploeg);
  }

  updatePloeg(ploeg: Ploeg) {
    return this.http.put<Ploeg>("https://localhost:44348/api/ploeg/" + ploeg.ploegID, ploeg);
  }
  //Tournooi beheer
  getAllTournoois(): Observable<Tournooi[]>{
    let _output = this.http.get<Tournooi[]>(this.tournooiUrl);
    this.refreshTournooien(_output);
    return _output;
  }
  newTournooi(tournooi): Observable<Tournooi>{
    return this.http.post<Tournooi>(this.tournooiUrl, tournooi);
  }
  updateTournooi(tournooi): Observable<Tournooi>{
    return this.http.put<Tournooi>(this.tournooiUrl + "/" + tournooi.tournooiID, tournooi);
  }
  deleteTournooi(id): Observable<Tournooi>{
    return this.http.delete<Tournooi>(this.tournooiUrl + "/" + id);
  }
  refreshTournooien(output){
    output.subscribe(val =>{
      this.tournooien.next(val);
    });
  }

  getWedstrijdenVanTournooi(id): Observable<Wedstrijd[]>{
    let _output = this.http.get<Wedstrijd[]>(this.wedstrijdUrl + "/Tournooi/" + id);
    this.refreshWedstrijden(_output);
    return _output;
  }

  postWedstrijd(wedstrijd): Observable<Wedstrijd>{
    return this.http.post<Wedstrijd>(this.wedstrijdUrl, wedstrijd);
  }
  
  deleteWedstrijd(id): Observable<Wedstrijd>{
    return this.http.delete<Wedstrijd>(this.wedstrijdUrl + "/" + id);
  }
  refreshWedstrijden(output){
    output.subscribe(val =>{
      this.wedstrijden.next(val);
    });
  }
  //Betwistingen
  getBetwistingen(){
    this.http.get<Wedstrijd[]>(this.wedstrijdUrl + "/Betwisting").subscribe(val =>{
      this.betwistingen.next(val);
    });
  }
  changeWedstrijd(wedstrijd): Observable<Wedstrijd>{
    return this.http.put<Wedstrijd>(this.wedstrijdUrl + "/" + wedstrijd.wedstrijdID, wedstrijd);
  }
  //MatchContexten
  postMatchContext(matchContext) : Observable<MatchContext>{
    return this.http.post<MatchContext>(this.matchContextUrl, matchContext);
  }
  //Competities
  getCompetities() : Observable<Competitie[]>{
    return this.http.get<Competitie[]>("https://localhost:44348/api/Competitie/");
  }

  getCompetitie(competitieID: number) : Observable<Competitie>{
    return this.http.get<Competitie>("https://localhost:44348/api/Competitie/" + competitieID);
  }

  deleteCompetitie(competitieID: number)
  {
    return this.http.delete<Competitie>("https://localhost:44348/api/Competitie/" + competitieID);
  }

  newCompetitie(competitie: Competitie) {
    return this.http.post<Competitie>("https://localhost:44348/api/Competitie/", competitie);
  }

  updateCompetitie(competitie: Competitie) {
    return this.http.put<Competitie>("https://localhost:44348/api/Competitie/" + competitie.competitieID, competitie);
  }

  getWedstrijdenVanCompetitie(id): Observable<Wedstrijd[]>{
    return this.http.get<Wedstrijd[]>("https://localhost:44348/api/Wedstrijd/Competitie/" + id);
  }

  getTafels(): Observable<Tafel[]> {
    return this.http.get<Tafel[]>("https://localhost:44348/api/tafel");
  }

  deleteMatchContext(id): Observable<MatchContext>{
    return this.http.delete<MatchContext>(this.matchContextUrl + "/" + id);
  }

  updateWedstrijd(wedstrijd: Wedstrijd) {
    return this.http.put<Wedstrijd[]>(this.wedstrijdUrl+ "/" + wedstrijd.wedstrijdID, wedstrijd);
  }
}
