import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/creator-event/services/evento/evento.service';
import { EventNewService } from '../service/event-new.service';
import { BaseComponentComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-info-basic',
  templateUrl: './info-basic.component.html',
  styleUrls: ['./info-basic.component.scss']
})
export class InfoBasicComponent extends BaseComponentComponent {

  form: FormGroup;
  minDate: Date = new Date();
  cancelado = false;
  eventId = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: EventoService,
    private serviceEvent: EventNewService,
    snackBar: MatSnackBar,
    route: ActivatedRoute
    ){ super(snackBar, route);

    if(this.getRouteId()){
      this.eventId = this.getRouteId();
      this.preencherForm(this.eventId);
    }

    this.form = this.formBuilder.group({

      id: this.getRouteId(),
      nomeEvento: ['GYC', Validators.required],
      maxInscricoes: [10, [Validators.required, Validators.min(1)]],
      whatsapp: ['38998453481', Validators.required],
      dataInicial: [new Date(), Validators.required],
      dataFinal: [new Date(), Validators.required],
      status: ['Ativo', Validators.required]
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.eventId ? this.update(this.eventId) : this.save()
    }else {
      this.showSnackBar('Preencha os campos corretamente');
    }
  }

  private save(){
    this.service.save(this.form.value).subscribe(
      result => {
      this.showSnackBar('Evento salvo');
      this.serviceEvent.routerId(result.id);
      this.serviceEvent.nextTab();
      },
      error => this.showSnackBar('Ocorreu um erro inesperado ao salvar evento'));
  }

  private update(id: string){
    this.service.update(this.form.value, id).subscribe(
      result => {
      this.showSnackBar('Informações atualizadas');
      },
      error => this.showSnackBar('Não foi possível atualizar informações'));
  }

  private preencherForm(id: string){
    const evento = this.service.get(id);
      evento.subscribe(values => {
        if(values){
          this.form.setValue(values);
        }else{
          this.showSnackBar('Não há dados para esse evento')
        }
      });
  }
}
