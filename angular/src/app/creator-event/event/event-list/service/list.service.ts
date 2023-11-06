import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { info } from 'src/app/creator-event/shrared/model/info';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  readonly API = 'assets/API.json'

  constructor(private httpClient: HttpClient) { }

  list(): Observable<info[]>{
    return this.httpClient.get<info[]>(this.API)
  }
}
