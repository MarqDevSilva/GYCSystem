import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventNewService } from '../service/event-new.service';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/shared/model/evento';
import { Observable } from 'rxjs';
import { EventoService } from 'src/app/creator-event/services/evento/evento.service';

@Component({
  selector: 'app-info-basic',
  templateUrl: './info-basic.component.html',
  styleUrls: ['./info-basic.component.scss']
})
export class InfoBasicComponent {

  form: FormGroup;
  minDate: Date = new Date();
  cancelado = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: EventoService,
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

      nomeEvento: ['GYC', Validators.required],
      maxInscricoes: [10, [Validators.required, Validators.min(1)]],
      whatsapp: ['38998453481', Validators.required],
      dataInicial: [new Date(), Validators.required],
      dataFinal: [new Date(), Validators.required],
      status: ['Ativo', Validators.required]
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
      }).unsubscribe();
    }else {
      this.invalid();
    }
  }

  private save(){
    this.service.save(this.form.value).subscribe(
      result => {
      this.onSuccess('Evento salvo');
      this.serviceEvent.routerId(result.id);
      this.serviceEvent.nextTab();
      console.log(result)
      },
      error => this.onError('Ocorreu um erro inesperado ao salvar evento'));
  }

  private update(id: string){
    this.service.update(this.form.value, id).subscribe(
      result => {
      this.onSuccess('Informações atualizadas');
      console.log(result)
      },
      error => this.onError('Não foi possível atualizar informações'));
  }

  private preencherForm(evento: Observable<Evento>){
    evento.subscribe(evento => {
      this.form.patchValue(evento);
    })
  }

  private onSuccess(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private onError(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private invalid(){
    this.snackBar.open('Preencha todos os campos corretamente', '', {duration: 5000});
  }
}
