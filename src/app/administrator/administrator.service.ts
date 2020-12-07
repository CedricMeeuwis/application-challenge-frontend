import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ploeg } from '../shared/models/ploeg';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http : HttpClient) { }

  //get Users voor admin
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("https://localhost:44348/api/User");
  }
  //post User voor admin
  postUser(user : User){
    return this.http.post<User>("https://localhost:44348/api/User",user);
  }
  //update User voor admin
  updateUser(userID : number, user : User){
    return this.http.post<User>("https://localhost:44348/api/User"+userID, user);
  }
  //delete User voor admin
  deleteUser(userID){
    return this.http.delete<User>("https://localhost:44348/api/User"+userID);
  }
  //get ploegen
  getPloegen() : Observable<Ploeg[]>{
    return this.http.get<Ploeg[]>("https://localhost:44348/api/Ploeg");
  }
}
