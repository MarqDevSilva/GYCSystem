import { Component } from '@angular/core';
import { Programacao } from 'src/app/creator-event/shrared/model/programacao';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent {

  datas: any[] = [];

  atividades: Partial<Programacao>[][] = [];

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

}
