import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { accomodation } from 'src/app/shared/model/accomodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private accomodation: Partial<accomodation>[] = [];

  constructor() { }

  save(data: Partial<accomodation>){
    this.accomodation.push(data);
    return of(data);
  }
}
