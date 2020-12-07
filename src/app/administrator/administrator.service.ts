import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournooi } from '../shared/models/tournooi';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  tournooiUrl = "https://localhost:44348/api/Tournooi";

  constructor(private _httpClient: HttpClient) { }

  getAllTournoois(): Observable<Tournooi[]>{
    return this._httpClient.get<Tournooi[]>(this.tournooiUrl);
  }
  newTournooi(tournooi): Observable<Tournooi>{
    return this._httpClient.post<Tournooi>(this.tournooiUrl, tournooi);
  }
  updateTournooi(tournooi): Observable<Tournooi>{
    return this._httpClient.put<Tournooi>(this.tournooiUrl + "/" + tournooi.tournooiID, tournooi);
  }
  deleteTournooi(id): Observable<Tournooi>{
    return this._httpClient.delete<Tournooi>(this.tournooiUrl + "/" + id);
  }
}
