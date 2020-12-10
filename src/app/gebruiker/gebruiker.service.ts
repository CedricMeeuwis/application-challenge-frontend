import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchContext } from '../shared/models/matchcontext';
import { Ploeg } from '../shared/models/ploeg';
import { Wedstrijd } from '../shared/models/wedstrijd';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http : HttpClient) { }

  getMatches(userID) : Observable<MatchContext[]>{
    return this.http.get<MatchContext[]>("https://localhost:44348/api/MatchContext/User/"+userID);
  }

  getWedstrijdenBusyOrNotStarted(userID) : Observable<Wedstrijd[]>{
    return this.http.get<Wedstrijd[]>("https://localhost:44348/api/Wedstrijd/User/BonS/"+userID);
  }

  getWedstrijd(wedstrijdId: number){
    return this.http.get<Wedstrijd>("https://localhost:44348/api/Wedstrijd/" + wedstrijdId);
  }
  updateWedstrijd(wedstrijd: Wedstrijd){
    return this.http.put<Wedstrijd>("https://localhost:44348/api/Wedstrijd/" + wedstrijd.wedstrijdID, wedstrijd);
  }

  updatePloeg(ploeg: Ploeg){
    return this.http.put<Ploeg>("https://localhost:44348/api/Ploeg/" + ploeg.ploegID, ploeg);
  }
}
