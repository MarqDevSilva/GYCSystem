import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventNewService {

  private formSaved = new Subject<void>();
  private tab = new BehaviorSubject<boolean>(true);
  private id!: string | null;

  formSaved$ = this.formSaved.asObservable();

  emitFormSaved() {
    this.formSaved.next();
  }

  enableTab(enable: boolean){
    this.tab.next(enable);
  }

  getTab(): Observable<boolean>{
    return this.tab.asObservable();
  }

  setId(id: string | null) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
