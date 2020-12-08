import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ploeg } from '../shared/models/ploeg';
import { User } from '../shared/models/user';
import { Tournooi } from '../shared/models/tournooi';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  tournooiUrl = "https://localhost:44348/api/Tournooi";

  constructor(private http : HttpClient) { }

  //get Users voor admin
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User/");
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

  getPloegen(): Observable<Ploeg[]>{
    return this.http.get<Ploeg[]>("https://localhost:44348/api/ploeg");
  }

  deleteArticle(ploegID: number)
  {
    return this.http.delete<Ploeg>("https://localhost:44348/api/ploeg/" + ploegID);
  }

  newPloeg(ploeg: Ploeg) {
    return this.http.post<Ploeg>("https://localhost:44348/api/ploeg", ploeg);
  }

  updatePloeg(ploeg: Ploeg) {
    return this.http.put<Ploeg>("https://localhost:44348/api/ploeg/" + ploeg.ploegID, ploeg);
  }
  getAllTournoois(): Observable<Tournooi[]>{
    return this.http.get<Tournooi[]>(this.tournooiUrl);
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
}
