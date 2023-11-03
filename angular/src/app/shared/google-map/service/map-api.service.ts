import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapAPIService {

  APIKey = 'AIzaSyBpggtF2D-gIc5h2ArPHLvL52Kcg85pH2A';
  API = `https://maps.googleapis.com/maps/api/js?key=${this.APIKey}`;

  constructor(private httpClient: HttpClient) {}

  loadAPI(){
    return this.httpClient.jsonp(this.API, 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
