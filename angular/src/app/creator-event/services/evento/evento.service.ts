import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/shared/model/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private API = '/api/evento';

  constructor(private http: HttpClient) { }

  save(evento: Partial<Evento>){
    return this.http.post<Evento>(this.API, evento);
  }

  update(evento: Partial<Evento>, id: string){
    return this.http.put<Evento>(`${this.API}/${id}`, evento);
  }

  get(id: string): Observable<Evento>{
    return this.http.get<Evento>(`${this.API}/${id}`)
  }

  list(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.API)
  }

  delete(id: string): Observable<Evento>{
    return this.http.delete<Evento>(`${this.API}/${id}`)
  }
}
