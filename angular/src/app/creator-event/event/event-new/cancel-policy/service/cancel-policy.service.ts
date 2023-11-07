import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { policy } from 'src/app/shared/model/policy';

@Injectable({
  providedIn: 'root'
})
export class CancelPolicyService {

  policy: Partial<policy> = {};

  constructor() { }

  save(data: Partial<policy>){
    this.policy = data;
    return of(data)
  }
}
