import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CapaService } from 'src/app/services/capa/capa.service';
import { EventNewService } from '../../service/event-new.service';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent extends BaseComponentComponent{

  @Output() error = new EventEmitter<string>;
  eventoId = this.getRouteId()

  form = this.formBuilder.group({
    evento:{id:  this.eventoId},
    titulo:[''],
    capa:[],
    preview: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: CapaService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)
    }

  async onSubmit(){
    //this.service.get(this.eventoId)
    this.save()
  }

  private async save(){
    if(this.form.valid){
      this.service.save(this.form.value).subscribe(
        result => result,
        error => this.error.emit("Capa"))
    }
  }

  private async update(){}

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

}
