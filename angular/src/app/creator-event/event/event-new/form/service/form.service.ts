import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { form } from 'src/app/creator-event/shrared/model/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private form: any[] = [];

  constructor() { }

  save(data: Partial<form>[]){
    this.form.push(data);
    return of(data);
  }
}
