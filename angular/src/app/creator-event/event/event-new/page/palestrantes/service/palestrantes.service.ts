import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalestrantesService {

  private palestrantes: any[] = [];

  constructor() { }

  save(data: any){
    this.palestrantes.push(data);
    return of(data);
  }
}
