import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchContext } from '../shared/models/matchcontext';
import { Wedstrijd } from '../shared/models/wedstrijd';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http : HttpClient) { }

  getMatches(userID) : Observable<Wedstrijd[]>{
    return this.http.get<Wedstrijd[]>("https://localhost:44348/api/Wedstrijd/User/"+userID);
  }
}
