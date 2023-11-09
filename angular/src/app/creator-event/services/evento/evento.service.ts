import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from 'src/app/shared/model/evento';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class EventoService extends GenericService<Evento> {

  constructor(http: HttpClient) {
    super(http, '/api/evento');
  }
}
