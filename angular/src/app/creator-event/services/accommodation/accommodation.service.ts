import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { accomodation } from 'src/app/shared/model/accomodation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService extends GenericService<accomodation> {

  constructor(http: HttpClient) {
    super(http, '/api/hospedagem');
  }

  getAll(id: string): Observable<accomodation[]> {
    return this.http.get<accomodation[]>(`${this.API}/${id}`);
  }
}