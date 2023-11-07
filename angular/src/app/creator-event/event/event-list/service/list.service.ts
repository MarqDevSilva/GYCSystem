import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/creator-event/shrared/model/evento';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  readonly API = 'assets/API.json'

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Evento[]>{
    return this.httpClient.get<Evento[]>(this.API)
  }
}
