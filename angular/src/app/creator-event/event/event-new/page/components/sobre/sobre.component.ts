import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() error = new EventEmitter<string>;
  eventoId = this.getRouteId()

  form = this.formBuilder.group({
    evento:{id: this.eventoId},
    descricao:['', Validators.required],
    background:'#FFFFFF',
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: SobreService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)}

  onSubmit(){
   this.save()
  }

  private save(){
    if(this.form.valid){
      this.service.save(this.form.value).subscribe(
        result => console.log(result),
        error => this.error.emit("Sobre")
      );
    }else{
      this.showSnackBar("Preencha a descricao sobre o evento")
    }
  }
}
