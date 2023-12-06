import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { Programacao } from 'src/app/shared/model/programacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramacaoService extends GenericService<Programacao> {

  constructor(http: HttpClient) {
    super(http, '/api/programacao');
  }

  getAll(id: string): Observable<Programacao[]> {
    return this.http.get<Programacao[]>(`${this.API}/${id}`);
  }

  deleteAll(ids: string[]): Observable<string[]>{
    return this.http.delete<string[]>(this.API, { body: ids });
  }
}
