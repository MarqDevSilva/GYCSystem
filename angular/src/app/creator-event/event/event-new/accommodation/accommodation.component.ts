import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from 'src/app/services/accommodation/accommodation.service';
import { accomodation } from 'src/app/shared/model/accomodation';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { EventNewService } from '../service/event-new.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent extends BaseComponentComponent {

  form: FormGroup;
  $hospedagens: Observable<accomodation[]> = new Observable<accomodation[]>;

  categorys = [
    {value: 'Masculino'},
    {value: 'Feminino'},
    {value: 'Família'},
  ];
  
  eventoId = '';

  constructor(
    private formBuilder : FormBuilder,
    private service : AccommodationService,
    private serviceEvent: EventNewService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog);

    this.eventoId = this.getRouteId();

    this.init();

    this.form = this.formBuilder.group({
      hospedagens: this.formBuilder.array([])
    })
  }

  novaHospedagem(): FormGroup {
    return this.formBuilder.group({
      evento: ({
        id: this.eventoId
      }),
      descricao: ['', Validators.required],
      lotacao: ['', Validators.required],
      categoria: [''],
      valor: ['', Validators.required]
    });
  }

  get hospedagens() {
    return this.hospedagemArray();
  }

  add() {
    this.hospedagemArray().push(this.novaHospedagem());
  }

  remove(index: number) {
    const id = this.hospedagemArray().at(index).get('id')?.value
    id ? this.delete(id, index) : this.hospedagemArray().removeAt(index)
  }

  next(){
    this.serviceEvent.nextTab();
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
    this.form.valid ? 
    this.service.saveAll(this.form.value.hospedagens).subscribe(
      result => {
      this.showSnackBar('Hospedagem salva');
      this.serviceEvent.nextTab();
      },
      error => this.showSnackBar('Ocorreu um erro inesperado ao salvar hospedagem')) 
    : this.showSnackBar('Preencha os campos corretamente');
  }

  private update(){
    this.form.valid ?
    this.service.updateAll(this.form.value.hospedagens).subscribe(
      result => {
      this.showSnackBar('Informações atualizadas');
      },
      error => this.showSnackBar('Não foi possível atualizar informações'))
    : this.showSnackBar('Preencha os campos corretamente');
  }

  private delete(id: string, index: number){
    const content = 'Você realmente deseja excluir essa hospedagem?';
    this.dialogShow(content).afterClosed().subscribe(result => {
      if(result && id){
          this.service.delete(id).subscribe(
            result => {
              this.showSnackBar('Hospedagem excluida');
              this.hospedagemArray().removeAt(index);
            },
            error => this.showSnackBar('Ocorreu um erro ao excluir hospedagem'))
      }
    })
  }

  private hospedagemArray(): FormArray{
    return this.form.get("hospedagens") as FormArray;
  }

  private async init(){
    await this.getDados();
    await this.setDados();
  }

  private async setDados(){
    this.$hospedagens.subscribe(values => {
      values ? 
      values.forEach(value => this.hospedagemArray().push(this.newFormGroup(value)))
      : console.log('Não há hospedagens cadastradas');
    })
  }

  private async getDados(){
    this.$hospedagens = this.service.getAll(this.eventoId).pipe(
      map(result => result)
    )
  }

  private newFormGroup(accommodation: accomodation): FormGroup{
    return this.formBuilder.group({
      evento: this.formBuilder.group({ id: accommodation.evento.id }),
      id: [accommodation.id],
      descricao: [accommodation.descricao, Validators.required],
      lotacao: [accommodation.lotacao, Validators.required],
      categoria: [accommodation.categoria],
      valor: [accommodation.valor, Validators.required]
    })
  }
}
