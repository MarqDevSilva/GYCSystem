import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { accomodation } from 'src/app/shared/model/accomodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService extends GenericService<accomodation> {

  constructor(http: HttpClient) {
    super(http, '/api/evento');
  }
}