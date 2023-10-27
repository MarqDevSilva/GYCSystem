import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, of } from 'rxjs';
import { info } from 'src/app/creator-event/shrared/model/info';

@Injectable({
  providedIn: 'root'
})
export class InfoBasicService {

  private API = './assets/API.json';
  private info: any[] = [];

  constructor(private http: HttpClient) { }

  save(data: Partial<info>){
    const index = this.info.length;
    const id = index.toString();
    const dataWithId: Partial<info> = { id, ...data };
    this.info.push(dataWithId);
    return of(dataWithId);
  }

  get(){
    return this.http.get(this.API)
  }
}
