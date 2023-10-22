import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent {

  form: FormGroup;

  categorys = [
    {value: 'Homem'},
    {value: 'Mulheres'},
    {value: 'Familia'},
  ];

  selectedValue?: string;

  constructor(private formBuilder : FormBuilder){

    this.form = this.formBuilder.group({
      hospedagens: this.formBuilder.array([])
    })
  }

  novaHospedagem(): FormGroup {
    return this.formBuilder.group({
      descricao: ['', Validators.required],
      lotacao: ['', Validators.required],
      categoria: [''],
      valor: ['', Validators.required]
    });
  }

  get hospedagens() {
    return this.form.controls["hospedagens"] as FormArray;
  }

  add() {
    const hospedagens = this.form.get('hospedagens') as FormArray;
    hospedagens.push(this.novaHospedagem());
  }

  remove(index: number) {
    const hospedagens = this.form.get('hospedagens') as FormArray;
    hospedagens.removeAt(index);
  }

  log(){
    console.log(this.form.value)
  }
}
