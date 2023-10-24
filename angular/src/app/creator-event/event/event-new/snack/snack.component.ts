import { Component } from '@angular/core';
import { EventNewService } from '../service/event-new.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { SnackService } from './service/snack.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private service: SnackService,
    private serviceEvent: EventNewService,
    private formBuilder : FormBuilder,
    private snackBar: MatSnackBar
    ){
    this.form = this.formBuilder.group({});
  }

  novaRefeicao(data: Date): FormGroup {
    const dia = this.formatDate(data);
    return this.formBuilder.group({
      evento: new FormGroup({
        id: new FormControl(this.setId())
      }),
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      data: [dia]
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
    formArray.push(this.novaRefeicao(data));
  }

  remove(data: Date, index: number) {
    const dia = this.formatDate(data);
    const formArray = this.form.get(dia) as FormArray;
    formArray.removeAt(index);
  }

  onSubmit(){
    if(this.form.valid){
      this.service.save(this.form.value).subscribe(
        result => {
          this.onSuccess();
          this.serviceEvent.emitFormSaved();
          console.log(result)
          },
        error => this.onError())}
    else{
      this.invalid();
    }
  }

  private setId(){
    const id = this.serviceEvent.getId();
    return id;
  }

  private onSuccess(){
    this.snackBar.open('Salvo com sucesso', '', {duration: 5000});
  }

  private onError(){
    this.snackBar.open('Erro ao salvar hospedagens', '', {duration: 5000});
  }

  private invalid(){
    this.snackBar.open('Preencha todos os campos corretamente', '', {duration: 5000});
  }

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

  //formatar datas
  formatDate(data: Date) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

}
