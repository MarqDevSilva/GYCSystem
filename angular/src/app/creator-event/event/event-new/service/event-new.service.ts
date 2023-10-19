import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventNewService {

  private formSaved = new Subject<void>();
  private id!: string | null;

  formSaved$ = this.formSaved.asObservable();

  emitFormSaved() {
    this.formSaved.next();
  }

  setId(id: string | null) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
