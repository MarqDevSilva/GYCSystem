import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-basic',
  templateUrl: './info-basic.component.html',
  styleUrls: ['./info-basic.component.scss']
})
export class InfoBasicComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      nomeEvento: ['', Validators.required],
      maxInscricoes: [0, [Validators.required, Validators.min(1)]],
      whatsapp: ['', Validators.required],
      dataInicial: ['', Validators.required],
      dataFinal: ['', Validators.required]
    })
  }
}
