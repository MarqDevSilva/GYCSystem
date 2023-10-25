import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  camposPadrao: any[] = [
    {type: 'short-text', ask: 'Nome Completo', required: true},
    {type: 'short-text', ask: 'E-mail', required: true},
    {type: 'short-text', ask: 'Tipo de Documento', required: true},
    {type: 'short-text', ask: 'Nº Documento', required: true},
    {type: 'short-text', ask: 'Celular', required: true}
  ];

  camposAdicionais: any[] = [];

  newSelect(index: number){
    if(this.camposAdicionais[index].onAdd){
      this.camposAdicionais[index].options.push(this.camposAdicionais[index].onAdd);
      this.camposAdicionais[index].onAdd = '';
    }
    console.log(this.camposAdicionais)
  }

  removeSelect(inputIndex: number, optionIndex: number) {
    if(this.camposAdicionais[inputIndex] && this.camposAdicionais[inputIndex].options) {
      this.camposAdicionais[inputIndex].options.splice(optionIndex, 1);
    }
  }

  onAdd(type: string){
    if(type === "radio" || type === "check" || type === "list"){
      this.camposAdicionais.push({type: type, ask: '', required: false, options: []})
    }else{
      this.camposAdicionais.push({type: type, ask: '', required: false})
    }
  }

  onDelete(index: number){
    this.camposAdicionais.splice(index, 1);
  }
}
