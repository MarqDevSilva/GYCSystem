import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { EventNewService } from '../service/event-new.service';
import { AccommodationService } from './service/accommodation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent extends BaseComponentComponent {

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
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route);


    this.form = this.formBuilder.group({
      hospedagens: this.formBuilder.array([])
    })
  }

  novaHospedagem(): FormGroup {
    return this.formBuilder.group({
      evento: ({
        id: this.getRouteId()
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
    this.serviceEvent.nextTab();
  }

  onSubmit(){
    if(this.form.valid){
      this.service.save(this.form.value).subscribe(
        result => {
          this.showSnackBar('Salvo com sucesso');
          this.serviceEvent.nextTab();
          console.log(result)
          },
        error => this.showSnackBar('Erro ao salvar hospedagens'))}
    else{
      this.showSnackBar('Preencha todos os campos corretamente');
    }
  }
}
