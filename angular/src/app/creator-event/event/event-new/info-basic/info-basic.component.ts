import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoBasicService } from './service/info-basic.service';
import { EventNewService } from '../service/event-new.service';

@Component({
  selector: 'app-info-basic',
  templateUrl: './info-basic.component.html',
  styleUrls: ['./info-basic.component.scss']
})
export class InfoBasicComponent {

  form: FormGroup;

  minDate: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private service: InfoBasicService,
    private serviceEvent: EventNewService,
    private snackBar: MatSnackBar
    ){

    this.form = this.preencherTest(); //this.formBuilder.group({

      //nomeEvento: ['', Validators.required],
      //maxInscricoes: [0, [Validators.required, Validators.min(1)]],
      //whatsapp: ['', Validators.required],
      //dataInicial: ['', Validators.required],
      //dataFinal: ['', Validators.required]
    //})
  }

  private preencherTest(){
    return this.formBuilder.group({
      nomeEvento: ['GYC', Validators.required],
      maxInscricoes: [10, [Validators.required, Validators.min(1)]],
      whatsapp: ['38998453481', Validators.required],
      dataInicial: [new Date(), Validators.required],
      dataFinal: [new Date(), Validators.required]
    })
  }

  onSubmit(){
    if (this.form.valid) {
      const eventData = this.form.value;
      this.service.save(eventData).subscribe(
        result => {
        this.onSuccess();
        //Serviço compartilhado para armazenar id do evento criado
        this.serviceEvent.setId(result.id!);
        //Serviço compartilhado para habilitar as outras tabs
        this.serviceEvent.enableTab(false);
        //Serviço compartilhado para mudar de tab ao salvar evento
        this.serviceEvent.emitFormSaved();
        },
        error => this.onError());
    }else{
      this.invalid();
    }
  }

  private onSuccess(){
    this.snackBar.open('Evento salvo', '', {duration: 5000});
  }

  private onError(){
    this.snackBar.open('Erro ao salvar evento', '', {duration: 5000});
  }

  private invalid(){
    this.snackBar.open('Preencha todos os campos corretamente', '', {duration: 5000});
  }
}
