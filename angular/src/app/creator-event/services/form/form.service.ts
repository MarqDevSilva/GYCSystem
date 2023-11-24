import { Injectable } from '@angular/core';
import { form } from 'src/app/shared/model/form';
import { GenericService } from '../generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService extends GenericService<form>{

  constructor(http: HttpClient) {
    super(http, '/api/form');
  }

  getAll(id: string): Observable<form[]> {
    return this.http.get<form[]>(`${this.API}/${id}`);
  }
}
