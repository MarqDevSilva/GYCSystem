import { Injectable } from '@angular/core';
import { Sobre } from 'src/app/shared/model/sobre';
import { GenericService } from '../generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SobreService extends GenericService<Sobre>{

  constructor(http: HttpClient) {
    super(http, '/api/sobre');
  }
}
