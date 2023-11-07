import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Evento } from 'src/app/creator-event/shrared/model/evento';

@Injectable({
  providedIn: 'root'
})
export class InfoBasicService {

  private API = '/api/evento';

  constructor(private http: HttpClient) { }

  save(evento: Partial<Evento>){
    return this.http.post<Evento>(this.API, evento);
  }

  get(){
    return this.http.get(this.API)
  }
}
