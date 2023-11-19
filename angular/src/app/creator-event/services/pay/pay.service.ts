import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { payMethod } from 'src/app/shared/model/payMethod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayService extends GenericService<payMethod>{

  constructor(http: HttpClient) {
    super(http, '/api/pay');
  }
}
