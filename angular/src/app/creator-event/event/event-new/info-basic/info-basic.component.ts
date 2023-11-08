import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoBasicService } from './service/info-basic.service';
import { EventNewService } from '../service/event-new.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/shared/model/evento';
import { Observable } from 'rxjs';

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
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
    ){

    this.route.paramMap.subscribe((url) => {
      const id = url.get('id')
      if(id){
        const evento = this.service.get(id)
        this.preencherForm(evento)
      }
    })

    this.form = this.formBuilder.group({

      nomeEvento: ['', Validators.required],
      maxInscricoes: [0, [Validators.required, Validators.min(1)]],
      whatsapp: ['', Validators.required],
      dataInicial: ['', Validators.required],
      dataFinal: ['', Validators.required]
    })
  }

  onSubmit(){
    if (this.form.valid){
      this.route.paramMap.subscribe((url) => {
        const id = url.get('id')
        if (id) {
          this.update(id)
        }else{
          this.save()
        }
      })
    }else {
      this.invalid();
    }
  }

  private save(){
    this.service.save(this.form.value).subscribe(
      result => {
      this.onSuccess();
      this.serviceEvent.routerId(result.id);
      this.serviceEvent.nextTab();
      console.log(result)
      },
      error => this.onError());
  }

  private update(id: string){
    this.service.update(this.form.value, id).subscribe(
      result => {
      this.onSuccess();
      console.log(result)
      },
      error => this.onError());
  }

  private preencherForm(evento: Observable<Evento>){
    evento.subscribe(evento => {
      this.form.patchValue(evento);

    })
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
