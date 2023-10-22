import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventNewService {

  private formSaved = new Subject<void>();
  private tab = new BehaviorSubject<boolean>(true);
  private id!: string | null;
  private datas: Date[] = [];

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

  //Não estava fucionando push para dataFinal usando while com < ou =
  pushDatas(dataInicial: Date, dataFinal: Date) {
    while(dataInicial < dataFinal){
      this.datas.push(new Date(dataInicial))
      dataInicial.setDate(dataInicial.getDate() + 1)
    };
    this.datas.push(dataFinal)
  }

  getDatas() {
    return this.datas;
  }
}
