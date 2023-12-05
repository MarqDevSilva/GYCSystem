import { Injectable } from '@angular/core';
import { Palestrante } from 'src/app/shared/model/palestrante';
import { GenericService } from '../generic.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PalestranteService extends GenericService<Palestrante> {

  constructor(http: HttpClient) {
    super(http, '/api/palestrante');
  }

  getAll(id: string): Observable<Palestrante[]> {
    return this.http.get<Palestrante[]>(`${this.API}/${id}`);
  }
}