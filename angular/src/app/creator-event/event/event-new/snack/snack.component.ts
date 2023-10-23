import { Component } from '@angular/core';
import { EventNewService } from '../service/event-new.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent {

  config = false;
  show = true;

  datas: Date[] = [];
  map: Map<string, FormArray> = new Map<string, FormArray>();

  form: FormGroup;

  constructor(
    private serviceEvent: EventNewService,
    private formBuilder : FormBuilder
    ){
    this.form = this.formBuilder.group({});
  }

  novaRefeicao(): FormGroup {
    return this.formBuilder.group({
      evento: new FormGroup({
        id: new FormControl(null)
      }),
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  get refeicoes(): {[key: string]: FormArray} {
    const formArrays: { [key: string]: FormArray } = {};
    this.datas.forEach(data => {
      const dia = this.formatDate(data);
      formArrays[dia] = this.form.get(dia) as FormArray;
    });
    return formArrays;
  }

  add(data: Date) {
    const dia = this.formatDate(data);
    const formArray = this.form.get(dia) as FormArray;
    formArray.push(this.novaRefeicao());
  }

  remove(data: Date, index: number) {
    const dia = this.formatDate(data);
    const formArray = this.form.get(dia) as FormArray;
    formArray.removeAt(index);
  }

  onSubmit(){}

  next(){
    this.serviceEvent.emitFormSaved();
  }

  //Método para mapear as datas para array
  mapArray(){
    if(this.config){
      this.datas = this.serviceEvent.getDatas();
      this.datas.forEach((data, index) => {
        const dia = this.formatDate(data);
        const formArray = this.formBuilder.array([]);
        this.map.set(dia, formArray);
      });
    this.addArray()
    }
  }

  //Método para adicionar os arrays ao form
  addArray(){
    if (this.map) {
      for (const [dia, formArray] of this.map.entries()) {
        this.form.addControl(dia, formArray);
      }
    }
  }

  //formatar nomes para o array
  formatDate(data: Date) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
}
