import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Programacao } from 'src/app/shared/model/programacao';

@Injectable({
  providedIn: 'root'
})
export class ProgramacaoService {

  private programacao: Partial<Programacao>[] = []

  constructor() { }

  save(data: Partial<Programacao>[]){
    this.programacao.push(...data);
    return of(data);
  }
}
