import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  private sobre: any[] = [];

  constructor() { }

  save(data: any){
    this.sobre.push(data);
    return of(data);
  }
}
