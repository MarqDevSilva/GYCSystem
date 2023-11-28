import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capa } from 'src/app/shared/model/capa';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class CapaService extends GenericService<Capa>{

  constructor(http: HttpClient) {
    super(http, '/api/capa')
  }
}
