import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CapaService } from 'src/app/services/capa/capa.service';
import { BaseComponentComponent } from '../../base-component/base-component.component';

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
    id: '',
    titulo:'',
    img: new FormControl ([] as number[] | string, Validators.required),
    preview: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: CapaService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)

      this.init()
  }

  onSubmit(){
    const id = this.form.get('id')?.value
    if(id){
      this.update(id);
    }else{
      console.log(this.form.value)
      this.save();
    }
  }

  private async save(){
    const form = this.form.value
    if(form.capa){
      this.service.save(form).subscribe(
        result => result,
        error => this.error.emit("Capa"))
    }
  }

  private async update(id: string){
    this.service.update(this.form.value, id).subscribe(
      result => this.showSnackBar("Atualizado"),
      error => this.error.emit("Capa")
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
        const value = asArrayBuffer ? Array.from(new Uint8Array(e.target.result)) : e.target.result;
        form.get(controlName)?.setValue(value);
      };

      asArrayBuffer ? reader.readAsArrayBuffer(file) : reader.readAsDataURL(file);
  }

  private async init(){
    this.service.get(this.eventoId).subscribe(
      result => this.form.setValue(result)
    )
  }
}
