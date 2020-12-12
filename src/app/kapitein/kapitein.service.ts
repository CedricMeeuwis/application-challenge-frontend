import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ploeg } from '../shared/models/ploeg';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class KapiteinService {

  constructor(private http: HttpClient) { }

  getMijnPloeg(): Observable<Ploeg> {
    return this.http.get<Ploeg>("https://localhost:44348/api/ploeg/mijnploeg");
  }

  getMijnPloegUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:44348/api/User/MijnPloeg");
  }

  getUsersZonderPloeg() : Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/Ploegloos");
  }

  addLid(userID: number) : Observable<User[]>{
    return this.http.put<User[]>("https://localhost:44348/api/User/AddToMyTeam?userID=" + userID, null);
  }

  removeLid(userID: number) : Observable<User[]>{
    return this.http.put<User[]>("https://localhost:44348/api/User/RemoveFromMyTeam?userID=" + userID, null);
  }

  setKapitein(userID: number) : Observable<User[]>{
    return this.http.put<User[]>("https://localhost:44348/api/User/SetKapiteinOfMyTeam?userID=" + userID, null);
  }

  updatePloeg(ploeg: Ploeg) : Observable<Ploeg>{
    return this.http.put<Ploeg>("https://localhost:44348/api/Ploeg/" + ploeg.ploegID, ploeg);
  }
}
