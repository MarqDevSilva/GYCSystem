import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private local: any[] = [];

  constructor() { }

  save(data: any){
    this.local.push(data);
    return of(data);
  }
}
