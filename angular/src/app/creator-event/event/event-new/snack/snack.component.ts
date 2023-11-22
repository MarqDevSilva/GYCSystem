import { Component } from '@angular/core';
import { EventNewService } from '../service/event-new.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/creator-event/services/evento/evento.service';
import { SnackService } from 'src/app/creator-event/services/snack/snack.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent extends BaseComponentComponent{

  config = false;
  show = true;

  datas: Date[];
  map: Map<string, FormArray> = new Map<string, FormArray>();

  form: FormGroup;

  eventoId = '';

  constructor(
    private service: SnackService,
    private serviceEvent: EventNewService,
    private eventoService: EventoService,
    private formBuilder : FormBuilder,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog);

    this.datas = this.getDatas();
    this.eventoId = this.getRouteId();
    this.form = this.formBuilder.group({});
  }

  novaRefeicao(data: Date): FormGroup {
    return this.formBuilder.group({
      evento:({
        id: this.eventoId
      }),
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      data: [data]
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

  onSubmit(){
    if(this.form.valid){
      this.service.save(this.form.value).subscribe(
        result => {
          this.showSnackBar('Salvo com sucesso');
          this.serviceEvent.nextTab();
          console.log(result)
          },
        error => this.showSnackBar('Erro ao salvar refeições'))}
    else{
      this.showSnackBar('Preencha todos os campos corretamente');
    }
  }

  next(){
    this.serviceEvent.nextTab();
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

  //Método para mapear as datas para array
  mapArray(){
     this.datas.forEach((data) => {
       const dia = this.formatDate(data);
       const formArray = this.formBuilder.array([]);
       this.map.set(dia, formArray);
     });
     this.addArray()
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

  private getDatas(): Date[]{
    const array: Date[] = [];
    this.eventoService.get(this.getRouteId()).subscribe(
      result => {
        let dataInicial: Date = new Date(result.dataInicial);
        const dataFinal: Date = new Date(result.dataFinal);
        while (dataInicial < dataFinal) {
          array.push(new Date(dataInicial));
          dataInicial.setDate(dataInicial.getDate() + 1);
        }
        array.push(dataFinal);
      },
      error => {
        console.error('Erro ao obter dados do evento:', error);
      }
    )
    return array;
  }
}
