import { of } from 'rxjs';
import { payMethod } from 'src/app/shared/model/payMethod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayMethodService {

  private payMethod: any[] = [];

  constructor() { }

  save(data: Partial<payMethod>){
    this.payMethod.push(data);
    return of(data);
  }
}
