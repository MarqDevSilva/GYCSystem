import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapaService {

  private capa: any[] = [];

  constructor() { }

  save(data: any){
    this.capa.push(data);
    return of(data);
  }
}
