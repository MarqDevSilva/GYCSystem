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

  //Variaveis para campo lista
  select: string[] = [];
  addSelect: string = '';

  //Variaveis para escolha única
  radio: string[] = [];
  addRadio: string = '';

  //Variaveis para escolha mútipla
  checkBox: string[] = [];
  addCheck: string = '';

  //Lógica para campo lista
  newSelect(){
    if(this.addSelect){
      this.select.push(this.addSelect);
      this.addSelect = '';
    }
  }

  removeSelect(index: number) {
    this.select.splice(index, 1);
  }

  //Lógica escolha única
  newRadio(){
    if(this.addRadio){
      this.radio.push(this.addRadio);
      this.addRadio = '';
    }
  }

  removeRadio(index: number) {
    this.radio.splice(index, 1);
  }

  //Lógica para checkBox
  newCheck(){
    if(this.addCheck){
      this.checkBox.push(this.addCheck);
      this.addCheck = '';
    }
  }

  removeCheck(index: number) {
    this.checkBox.splice(index, 1);
  }

  //Funções para adicionar os campos
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
