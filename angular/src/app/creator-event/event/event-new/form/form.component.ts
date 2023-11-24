import { Component } from '@angular/core';
import { form } from 'src/app/shared/model/form';
import { EventNewService } from '../service/event-new.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/creator-event/services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BaseComponentComponent{

  eventoId: string;

  inputs: Partial<form>[] = []

  constructor(
    private service: FormService,
    private serviceEvent: EventNewService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)
    
      this.eventoId = this.getRouteId();

      this.inputs = [
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'Nome Completo', required: true},
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'E-mail', required: true},
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'Tipo de Documento', required: true},
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'Nº Documento', required: true},
      {evento:{id: this.eventoId}, type: 'pattern',  ask: 'Celular', required: true}
      ]
      
    }

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
      this.inputs.push({evento:{id: this.eventoId}, type: type,  ask: '', required: false, options: [], onAdd: null})
    }else{
      this.inputs.push({evento:{id: this.eventoId}, type: type,  ask: '', required: false, onAdd: null})
    }
  }

  onDelete(index: number){
    this.inputs.splice(index, 1);
  }

  onSubmit(){
    this.service.saveAll(this.inputs).subscribe(
      result => {
        this.showSnackBar('Salvo com sucesso');
        this.serviceEvent.nextTab();
        console.log(result)
        },
      error => this.showSnackBar('Ocorreu um erro inesperado'))
  }
}


