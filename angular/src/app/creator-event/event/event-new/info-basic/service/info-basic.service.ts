import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { info } from 'src/app/creator-event/shrared/components/model/info';

@Injectable({
  providedIn: 'root'
})
export class InfoBasicService {

  private info: any[] = [];

  constructor() { }

  save(data: Partial<info>){

    this.info.push(data);
    return of(data);
  }
}
