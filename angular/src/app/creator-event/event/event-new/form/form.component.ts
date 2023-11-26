import { Component } from '@angular/core';
import { form } from 'src/app/shared/model/form';
import { EventNewService } from '../service/event-new.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/creator-event/services/form/form.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BaseComponentComponent{

  eventoId: string;

  inputs: Partial<form>[] = []
  $inputs: Observable<form[]> = new Observable<form[]>

  constructor(
    private service: FormService,
    private serviceEvent: EventNewService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)
    
      this.eventoId = this.getRouteId();

      this.init();
    }

  add(index: number){
    if(this.inputs[index].onAdd){
      this.inputs[index].options?.push(this.inputs[index].onAdd?? '')
      this.inputs[index].onAdd = null;
    }
  }

  removeOption(inputIndex: number, optionIndex: number) {
    if(this.inputs[inputIndex] && this.inputs[inputIndex].options) {
      this.inputs[inputIndex].options?.splice(optionIndex, 1);
    }
  }

  onAdd(type: string){
    if(type === "radio" || type === "check" || type === "list"){
      this.inputs.push({evento:{id: this.eventoId}, type: type,  ask: '', required: false, options: [], onAdd: null})
    }else{
      this.inputs.push({evento:{id: this.eventoId}, type: type,  ask: '', required: false, onAdd: null})
    }
  }

  removeInput(index: number){
    const id = this.inputs[index].id
    if(id){
      this.delete(id, index)
    }else{
      this.inputs.splice(index, 1);
    }
  }

  onSubmit(){
    if(this.eventoId){
      this.service.getAll(this.eventoId).subscribe((result) => {
        if (result && result.length > 0) {
            this.update();
          } else {
            this.save();
          }
    });
    }else{
      this.showSnackBar('Não há evento para associar')
    }
  }

  private save(){
    this.service.saveAll(this.inputs).subscribe(
      result => {
      this.showSnackBar('Salvo com sucesso');
      this.serviceEvent.nextTab();
      },
      error => this.showSnackBar('Ocorreu um erro inesperado')) 
  }

  private update(){
    this.service.updateAll(this.inputs).subscribe(
      result => {
      this.showSnackBar('Informações atualizadas');
      },
      error => this.showSnackBar('Não foi possível atualizar informações'))
  }

  private delete(id: string, index: number){
    const content = 'Você realmente deseja excluir essa campo?';
    this.dialogShow(content).afterClosed().subscribe(result => {
      if(result && id){
          this.service.delete(id).subscribe(
            result => {
              this.showSnackBar('Campo excluido');
              this.inputs.splice(index);
            },
            error => this.showSnackBar('Ocorreu um erro ao excluir campo'))
      }
    })
  }

  private async init(){
    await this.getDados();
    await this.setDados();
  }

  private async getDados(){
    this.$inputs = this.service.getAll(this.eventoId).pipe(
      map(result => result)
    )
  }

  private async setDados(){
    this.$inputs.subscribe(values => {
      if (values.length > 0) {
        values.forEach(value => this.inputs.push(value));
      } else {
        this.criarInputsPattern();
        console.warn('O array de valores está vazio');
      }
    });
  }

  private criarInputsPattern(){
    this.inputs = [
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'Nome Completo', required: true},
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'E-mail', required: true},
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'Tipo de Documento', required: true},
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'Nº Documento', required: true},
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'Celular', required: true}
      ]
  }
}


