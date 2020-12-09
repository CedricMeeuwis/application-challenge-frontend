import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchContext } from '../shared/models/matchcontext';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http : HttpClient) { }

  getMatches(userID) : Observable<MatchContext[]>{
    return this.http.get<MatchContext[]>("https://localhost:44348/api/MatchContext/User/"+userID);
  }
}
