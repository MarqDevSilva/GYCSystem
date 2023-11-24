import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable, delay, map } from 'rxjs';
import { EventoService } from 'src/app/creator-event/services/evento/evento.service';
import { SnackService } from 'src/app/creator-event/services/snack/snack.service';
import { Snack } from 'src/app/shared/model/snack';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { EventNewService } from '../service/event-new.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})

export class SnackComponent extends BaseComponentComponent{

  config = false;
  show = true;
  arrayDatas: string[] = [];
  $refeicoes: Observable<Snack[]> = new Observable<Snack[]>;
  
  form: FormGroup;

  eventoId: string;

  constructor(
    private service: SnackService,
    private serviceEvent: EventNewService,
    private eventoService: EventoService,
    private formBuilder : FormBuilder,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog);

    this.eventoId = this.getRouteId();

    this.form = this.formBuilder.group({});

    this.init();
  }

  novaRefeicao(data: string): FormGroup {
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
    this.arrayDatas.forEach(data => {
      const dia = data;
      formArrays[dia] = this.form.get(dia) as FormArray;
    });
    return formArrays;
  }

  get datas(): string[]{
    return Object.keys(this.form.controls);
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

  next(){
    console.log(this.form.value)
  }

  add(data: string) {
    const formArray = this.getArray(data);
    formArray.push(this.novaRefeicao(data));
  }

  remove(data: string, index: number) {
    const formArray = this.getArray(data);
    const id = formArray.at(index).get('id')?.value;
    id ? this.delete(id, index, data) : formArray.removeAt(index);
  }

  private save(){
    this.form.valid ? 
    this.service.saveAll(this.getFormValues()).subscribe(
      result => {
      this.showSnackBar('Refeições salvas');
      this.serviceEvent.nextTab();
      },
      error => this.showSnackBar('Ocorreu um erro inesperado ao salvar reefições')) 
    : this.showSnackBar('Preencha os campos corretamente');
  }

  private update(){
    this.form.valid ? 
    this.service.updateAll(this.getFormValues()).subscribe(
      result => {
      this.showSnackBar('Informações atualizadas');
      this.serviceEvent.nextTab();
      },
      error => this.showSnackBar('Ocorreu um erro inesperado ao atualizar informações')) 
    : this.showSnackBar('Preencha os campos corretamente');
  }

  private delete(id: string, index: number, data: string){
    const content = 'Você realmente deseja excluir essa refeição?';
    this.dialogShow(content).afterClosed().subscribe(result => {
      if(result && id){
          this.service.delete(id).subscribe(
            result => {
              const formArray = this.getArray(data);
              this.showSnackBar('Refeição excluida');
              formArray.removeAt(index);
            },
            error => this.showSnackBar('Ocorreu um erro ao excluir hospedagem'))
      }
    })
  }

  private getArray(data: string): FormArray{
    return this.form.get(data) as FormArray;
  }

  private async init(){
    await this.datasToArray();
    await this.getDados();
    await this.setDados();
  }

  private async getDados(){
    this.$refeicoes = this.service.getAll(this.eventoId).pipe(
      map(result => result)
    );
  }

  private async setDados(){
    const refeicoes = await this.$refeicoes.toPromise();
    refeicoes?.forEach(item => {
      const array = this.form.get(this.formatDate(item.data)) as FormArray;
      array.push(this.formBuilder.group(
        {
          evento:({
            id: this.eventoId
          }),
          id: item.id,
          descricao: [item.descricao, Validators.required],
          valor: [item.valor, Validators.required],
          data: [item.data]
        }
      ))
    })
  }

  private listDatas(): Observable<string[]> {
    return this.eventoService.get(this.eventoId).pipe(
      map(result => {
        const lista: string[] = [];
        const dataInicial = new Date(result.dataInicial);
        const dataFinal = new Date(result.dataFinal);
  
        while (dataInicial <= dataFinal) {
          lista.push(this.formatDate(new Date(dataInicial)));
          dataInicial.setDate(dataInicial.getDate() + 1);
        }

        return lista;
      })
    );
  }
  
  private async datasToArray() {
    const lista = await this.listDatas().toPromise();
    lista?.forEach(item => {
      this.form.addControl(item, this.formBuilder.array([]))
    })

    if(lista){this.arrayDatas = lista}
  }

  private getFormValues(): Snack[] {
    return Object.keys(this.form.controls)
      .map(key => this.form.get(key) as FormArray)
      .flatMap(control => control.value)
      .reduce((acc, curr) => acc.concat(curr), []);
  }

  private formatDate(data: Date): string{
    moment.locale('pt-br');
    const dataString = moment(data).format('L')
    return dataString;
  }
}