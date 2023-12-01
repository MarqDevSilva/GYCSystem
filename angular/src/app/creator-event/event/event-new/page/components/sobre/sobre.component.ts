import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SobreService } from 'src/app/services//sobre/sobre.service';
import { BaseComponentComponent } from '../../../base-component/base-component.component';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent extends BaseComponentComponent{

  @Input() status: boolean = false;
  eventoId = this.getRouteId()

  form = this.formBuilder.group({
    evento:{id: this.eventoId},
    id: '',
    habilitado: false,
    descricao:['', Validators.required],
    background:'#FFFFFF',
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: SobreService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)}

  async onSubmit(){
   this.save(this.status)
  }

  private save(status: boolean){
    try {
      if(this.form.valid){
        this.form.patchValue({habilitado: status})
        this.service.save(this.form.value).subscribe(
          result => result,
          error => {throw new Error(error)});
      }else{
        throw new Error ("Preencha a descrição sobre o evento")
      }
    }
    catch (error: any) {
      throw (error)
    }
  }
}
