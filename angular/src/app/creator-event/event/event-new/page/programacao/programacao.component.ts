import { Component } from '@angular/core';
import { Programacao } from 'src/app/creator-event/shrared/model/programacao';
import { ProgramacaoService } from './service/programacao.service';
import { EventNewService } from '../../service/event-new.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent {

  datas: any[] = [];

  atividades: Partial<Programacao>[][] = [];

  constructor(
    private service: ProgramacaoService,
    private serviceEvent: EventNewService,
    private snackBar: MatSnackBar
  ){}

  newData() {
    this.datas.push({ data: new Date() });
    this.atividades.push([]);
  }

  deleteData(dataIndex: number){
    this.datas.splice(dataIndex, 1);
    this.atividades.splice(dataIndex, 1);
    console.log(this.atividades)
  }

  onAdd(dataIndex: number) {
    this.atividades[dataIndex].push({ evento: { id: '' }, data: this.datas[dataIndex].data, hInicial: '', hFinal: '', atividade: '' });
  }

  onDelete(dataIndex: number, atividadeIndex: number) {
    this.atividades[dataIndex].splice(atividadeIndex, 1);
  }

  private onSuccess(){
    this.snackBar.open('Salvo com sucesso', '', {duration: 5000});
  }

  private onError(){
    this.snackBar.open('Erro ao salvar hospedagens', '', {duration: 5000});
  }

}
