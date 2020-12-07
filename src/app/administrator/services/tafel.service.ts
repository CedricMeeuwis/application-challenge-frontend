import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from '../../shared/models/tafel';

@Injectable({
  providedIn: 'root'
})
export class TafelService {

  constructor(private http: HttpClient) { }

  getTafels(): Observable<Tafel[]> {
    return this.http.get<Tafel[]>("https://localhost:44348/api/tafel");
  }

  getTafel(tafelID: number): Observable<Tafel> {
    return this.http.get<Tafel>("https://localhost:44348/api/tafel/" + tafelID);
  }

  addTafel(tafel: Tafel) {
    return this.http.post<Tafel>("https://localhost:44348/api/tafel", tafel);
  }

  updateTafel(tafelID: number, tafel: Tafel) {
    return this.http.put<Tafel>("https://localhost:44348/api/tafel/" + tafelID, tafel);
  }

  deleteTafel(tafelID: number) {
    return this.http.delete<Tafel>("https://localhost:44348/api/tafel/" + tafelID);
  }
}
