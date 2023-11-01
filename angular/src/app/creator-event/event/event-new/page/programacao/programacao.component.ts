import { Component, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent {

  minDate: Date = new Date();

  datas: any[] = [
    { data: new Date("2023-10-31") },
    { data: new Date("2023-11-01") },
    { data: new Date("2023-11-02") },
  ];

  atividades: any[] = [
  [
    { evento: { id: '1' }, data: this.datas[0].data, hInicial: '09:00', hFinal: '10:30', atividade: 'Reunião' },
    { evento: { id: '2' }, data: this.datas[0].data, hInicial: '14:00', hFinal: '15:30', atividade: 'Apresentação' },
  ],
  [
    { evento: { id: '3' }, data: this.datas[1].data, hInicial: '10:00', hFinal: '11:30', atividade: 'Treinamento' },
  ],
  [
    { evento: { id: '4' }, data: this.datas[2].data, hInicial: '15:00', hFinal: '16:30', atividade: 'Workshop' },
    { evento: { id: '5' }, data: this.datas[2].data, hInicial: '17:00', hFinal: '18:30', atividade: 'Discussão' },
  ],
];

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
