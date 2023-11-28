import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventNewService } from '../../service/event-new.service';
import { SobreService } from './service/sobre.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  @Output() error = new EventEmitter<string>;

  form = this.formBuilder.group({
    evento:{id: new FormControl(this.setId())},
    descricao:['', Validators.required],
    background:'#FFFFFF',
  })

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: SobreService,
    private serviceEvent: EventNewService){
    }

  onSubmit(){
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(
        result => console.log(result),
        error => this.onError('Ocorreu um erro inesperado ao salvar a seção SOBRE')
      );
    }else{
      this.error.emit("Sobre")
    }
  }

  private onError(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private setId(){
    const id = this.serviceEvent.getId();
    return id;
  }
}
