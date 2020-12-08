import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ploeg } from '../shared/models/ploeg';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) { }

  getPloegen(): Observable<Ploeg[]>{
    return this.http.get<Ploeg[]>("https://localhost:5001/api/ploeg");
  }

  deleteArticle(ploegID: number)
  {
    return this.http.delete<Ploeg>("https://localhost:5001/api/ploeg/" + ploegID);
  }

  newPloeg(ploeg: Ploeg) {
    return this.http.post<Ploeg>("https://localhost:5001/api/ploeg", ploeg);
  }

  updatePloeg(ploeg: Ploeg) {
    return this.http.put<Ploeg>("https://localhost:5001/api/ploeg/" + ploeg.ploegID, ploeg);
  }
}
