import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { EventNewService } from '../service/event-new.service';
import { AccommodationService } from './service/accommodation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent {

  form: FormGroup;

  categorys = [
    {value: 'Masculino'},
    {value: 'Feminino'},
    {value: 'Família'},
  ];

  selectedValue?: string;

  constructor(
    private formBuilder : FormBuilder,
    private service : AccommodationService,
    private serviceEvent: EventNewService,
    private snackBar: MatSnackBar){

    this.form = this.formBuilder.group({
      hospedagens: this.formBuilder.array([])
    })
  }

  novaHospedagem(): FormGroup {
    return this.formBuilder.group({
      evento: new FormGroup({
        id: new FormControl(this.setId())
      }),
      descricao: ['', Validators.required],
      lotacao: ['', Validators.required],
      categoria: [''],
      valor: ['', Validators.required]
    });
  }

  get hospedagens() {
    return this.form.get("hospedagens") as FormArray;
  }

  add() {
    const hospedagens = this.form.get('hospedagens') as FormArray;
    hospedagens.push(this.novaHospedagem());
  }

  remove(index: number) {
    const hospedagens = this.form.get('hospedagens') as FormArray;
    hospedagens.removeAt(index);
  }

  next(){
    this.serviceEvent.emitFormSaved();
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
}