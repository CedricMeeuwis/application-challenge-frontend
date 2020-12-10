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
    return this.http.get<Wedstrijd[]>("https://localhost:44348/api/Wedstrijd/User/"+userID);
  }
  
  getMijnPloeg(): Observable<Ploeg> {
    return this.http.get<Ploeg>("https://localhost:44348/api/ploeg/mijnploeg");
  }

  getPloegen(): Observable<Ploeg[]> {
    return this.http.get<Ploeg[]>("https://localhost:44348/api/Ploeg/AnderePloegen");
  }

  getMijnPloegChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>("https://localhost:44348/api/Challenge/PloegChallenges");
  }

  getMijnPloegOpenChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>("https://localhost:44348/api/challenge/PloegOpenChallenges");
  }

  setChallengeReactie(challengeID: number, response: boolean){
    return this.http.put<Challenge>("https://localhost:44348/api/challenge/Reactie/" + challengeID + "?geaccepteerd=" + response, null);
  }

  createChallenge(challenge: Challenge): Observable<Challenge> {
    return this.http.post<Challenge>("https://localhost:44348/api/Challenge", challenge);
  }

  deleteChallenge(challengeID: number): Observable<Challenge> {
    return this.http.delete<Challenge>("https://localhost:44348/api/Challenge/" + challengeID);
  }

  getMijnPloegUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:44348/api/User/MijnPloeg");
  }
  
}
