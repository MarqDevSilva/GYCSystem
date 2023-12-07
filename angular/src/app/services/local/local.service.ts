import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { Local } from 'src/app/shared/model/local';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalService extends GenericService<Local>{

  constructor(http: HttpClient) {
    super(http, '/api/local');
  }
}
