import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ploeg } from '../shared/models/ploeg';
import { Challenge } from '../shared/models/challenge';
import { User } from '../shared/models/user';
import { MatchContext } from '../shared/models/matchcontext';
import { Wedstrijd } from '../shared/models/wedstrijd';


@Injectable({
  providedIn: 'root'
})
export class GebruikerService {
  

  constructor(private http: HttpClient) { }

  getMatches(userID) : Observable<Wedstrijd[]>{
    return this.http.get<Wedstrijd[]>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Wedstrijd/User/"+userID);
  }
  
  getMijnPloeg(): Observable<Ploeg> {
    return this.http.get<Ploeg>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/ploeg/mijnploeg");
  }

  getPloegen(): Observable<Ploeg[]> {
    return this.http.get<Ploeg[]>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Ploeg/AnderePloegen");
  }

  getMijnPloegChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Challenge/PloegChallenges");
  }

  getMijnPloegOpenChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/challenge/PloegOpenChallenges");
  }

  setChallengeReactie(challengeID: number, response: boolean){
    return this.http.put<Challenge>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/challenge/Reactie/" + challengeID + "?geaccepteerd=" + response, null);
  }

  createChallenge(challenge: Challenge): Observable<Challenge> {
    return this.http.post<Challenge>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Challenge", challenge);
  }

  deleteChallenge(challengeID: number): Observable<Challenge> {
    return this.http.delete<Challenge>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Challenge/" + challengeID);
  }

  getMijnPloegUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/User/MijnPloeg");
  }

  getMijnStats(): Observable<Object> {
    return this.http.get<Object>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Wedstrijd/MijnStats");
  }
  
  getWedstrijdenBusyOrNotStarted(userID) : Observable<Wedstrijd[]>{
    return this.http.get<Wedstrijd[]>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Wedstrijd/User/BonS/"+userID);
  }

  getWedstrijd(wedstrijdId: number){
    return this.http.get<Wedstrijd>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Wedstrijd/" + wedstrijdId);
  }
  updateWedstrijd(wedstrijd: Wedstrijd){
    return this.http.put<Wedstrijd>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Wedstrijd/" + wedstrijd.wedstrijdID, wedstrijd);
  }

  updatePloeg(ploeg: Ploeg){
    return this.http.put<Ploeg>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Ploeg/" + ploeg.ploegID, ploeg);
  }

  betwistWedstrijd(wedstrijdID: number) {
    return this.http.put<Wedstrijd>("https://applicationchallengeapi20201212171638.azurewebsites.net/api/Wedstrijd/Betwist/" + wedstrijdID, null);
  }
}
