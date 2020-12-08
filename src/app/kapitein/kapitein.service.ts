import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ploeg } from '../shared/models/ploeg';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class KapiteinService {

  constructor(private http : HttpClient) { }

  addPloeg(ploeg : Ploeg){
    return this.http.post<Ploeg>("https://localhost:44348/api/Ploeg/",ploeg);
  }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/Ploegloos");
  }

}
