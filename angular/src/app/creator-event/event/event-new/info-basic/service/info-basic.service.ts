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
    const index = this.info.length;
    const id = index.toString();
    const dataWithId: Partial<info> = { id, ...data };
    this.info.push(dataWithId);
    return of(dataWithId);
  }
}
