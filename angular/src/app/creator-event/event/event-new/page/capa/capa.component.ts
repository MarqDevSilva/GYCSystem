import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CapaService } from './service/capa.service';
import { EventNewService } from '../../service/event-new.service';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent {

  form = this.formBuilder.group({
    evento:{id:  new FormControl(this.setId())},
    titulo:'',
    capa:[],
    preview: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: CapaService,
    private snackBar: MatSnackBar,
    private serviceEvent: EventNewService
  ){}

  onSubmit(){
    const capa = this.form.get('capa')?.value
    if(capa){
      this.service.save(this.form.value).subscribe(
        result =>console.log(result),
        error => this.onError('Ocorreu um erro inesperado ao salvar dados da CAPA')
      )
    }else(
      this.onError('Escolha uma IMG de CAPA para seu evento ')
    )
  }

  onFile(event: any) {
    this.readFile(event, this.form, 'capa', true);
    this.readFile(event, this.form, 'preview');
  }

  private readFile(event: any, form: FormGroup, controlName: string, asArrayBuffer: boolean = false) {
    const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const value = asArrayBuffer ? new Uint8Array(e.target.result as ArrayBuffer) : e.target.result;
        form.get(controlName)?.setValue(value);
      };

      asArrayBuffer ? reader.readAsArrayBuffer(file) : reader.readAsDataURL(file);
  }

  private onError(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private setId(){
    const id = this.serviceEvent.getId();
    return id;
  }
}
