import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProgramacaoService } from 'src/app/services/programacao/programacao.service';
import { Programacao } from 'src/app/shared/model/programacao';
import { BaseComponentComponent } from '../../../base-component/base-component.component';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent extends BaseComponentComponent{

  eventoId = this.getRouteId()
  @Input() datas: any[] = [];
  @Input() atividades: Programacao[][] = [];

  constructor(
    private service: ProgramacaoService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)}

  newData() {
    this.datas.push({ data: new Date() });
    console.log(this.datas)
    this.atividades.push([]);
    console.log(this.atividades)
  }

  deleteData(dataIndex: number){
    const ids =  this.atividades[dataIndex].map(item => item.id) as string[]
    const content = 'Você realmente deseja excluir?';
    this.dialogShow(content).afterClosed().subscribe(result => {
      if(result && ids.length){
          this.service.deleteAll(ids).subscribe(
            result => {
              this.showSnackBar('Excluido');
              this.datas.splice(dataIndex, 1);
              this.atividades.splice(dataIndex, 1);
            },
            error => this.showSnackBar('Ocorreu um erro'))
      }else{
        this.datas.splice(dataIndex, 1);
        this.atividades.splice(dataIndex, 1);
      }
    })
  }

  onAdd(dataIndex: number) {
    this.atividades[dataIndex].push({ evento: { id: this.eventoId },id:null , data: this.datas[dataIndex].data, inicio: '', termino: '', atividade: '' });
  }

  onDelete(dataIndex: number, atividadeIndex: number) {
    const id =  this.atividades[dataIndex][atividadeIndex].id
    const content = 'Você realmente deseja excluir?';
    this.dialogShow(content).afterClosed().subscribe(result => {
      if(result && id){
          this.service.delete(id).subscribe(
            result => {
              this.showSnackBar('Excluido');
              this.atividades[dataIndex].splice(atividadeIndex, 1)
            },
            error => this.showSnackBar('Ocorreu um erro'))
      }else{
        this.atividades[dataIndex].splice(atividadeIndex, 1)
      }
    })
  }

  async onSubmit(){
    if(this.eventoId){
      this.service.getAll(this.eventoId).subscribe((result) => {
        if(result && result.length > 0) {
            this.update();
          } else {
            this.save();
          }
      });
    }
  }

  private save(){
    const atividade = this.atividades.reduce((acc, atividades) => {return acc.concat(atividades)}, []);
    this.service.saveAll(atividade).subscribe(
      result => result
    );
  }

  private update(){
    const atividade = this.atividades.reduce((acc, atividades) => {return acc.concat(atividades)}, []);
    this.service.updateAll(atividade).subscribe()
  }
}
