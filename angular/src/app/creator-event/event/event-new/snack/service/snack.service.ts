import { of } from 'rxjs';
import { snack } from './../../../../shrared/model/snack';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  snacks: any[] = [];

  constructor() { }

  save(data: Partial<snack>){
    this.snacks.push(data);
    return of (data);
  }
}
