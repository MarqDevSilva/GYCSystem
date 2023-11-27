import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { policy } from 'src/app/shared/model/policy';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CancelService extends GenericService<policy> {

  constructor(http: HttpClient) {
    super(http, '/api/cancel');
  }
}
