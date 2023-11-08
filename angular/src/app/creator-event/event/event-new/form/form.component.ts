import { Component } from '@angular/core';
import { FormService } from './service/form.service';
import { form } from 'src/app/shared/model/form';
import { EventNewService } from '../service/event-new.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  inputs: Partial<form>[] = [
    {evento:{id: this.setId()}, type: 'pattern',  ask: 'Nome Completo', required: true},
    {evento:{id: this.setId()}, type: 'pattern',  ask: 'E-mail', required: true},
    {evento:{id: this.setId()}, type: 'pattern',  ask: 'Tipo de Documento', required: true},
    {evento:{id: this.setId()}, type: 'pattern',  ask: 'Nº Documento', required: true},
    {evento:{id: this.setId()}, type: 'pattern',  ask: 'Celular', required: true}
  ]

  constructor(
    private service: FormService,
    private serviceEvent: EventNewService,
    private snackBar: MatSnackBar){}

  add(index: number){
    if(this.inputs[index].onAdd){
      this.inputs[index].options?.push(this.inputs[index].onAdd?? '')
      this.inputs[index].onAdd = null;
    }
  }

  remove(inputIndex: number, optionIndex: number) {
    if(this.inputs[inputIndex] && this.inputs[inputIndex].options) {
      this.inputs[inputIndex].options?.splice(optionIndex, 1);
    }
  }

  onAdd(type: string){
    if(type === "radio" || type === "check" || type === "list"){
      this.inputs.push({evento:{id: this.setId()}, type: type,  ask: '', required: false, options: [], onAdd: null})
    }else{
      this.inputs.push({evento:{id: this.setId()}, type: type,  ask: '', required: false, onAdd: null})
    }
  }

  onDelete(index: number){
    this.inputs.splice(index, 1);
  }

  onSubmit(){
    this.service.save(this.inputs).subscribe(
      result => {
        this.onSuccess();
        this.serviceEvent.nextTab();
        console.log(result)
        },
      error => this.onError())
  }

  private onSuccess(){
    this.snackBar.open('Salvo com sucesso', '', {duration: 5000});
  }

  private onError(){
    this.snackBar.open('Erro ao salvar formulário', '', {duration: 5000});
  }

  private setId(){
    const id = this.serviceEvent.getId();
    return id;
  }
}
