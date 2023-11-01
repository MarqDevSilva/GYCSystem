import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViaCEPService } from 'src/app/creator-event/shrared/utils/APIcep/via-cep.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent {

  loading= false;

  form = this.formBuilder.group({
    cep:['', Validators.required],
    uf: new FormControl({value:'', disabled:true}),
    cidade:new FormControl({value:'', disabled:true}),
    bairro:['', Validators.required],
    endereco:['', Validators.required],
    numero:['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private serviceCEP: ViaCEPService,
    private snackBar: MatSnackBar)
  {}

  searchCEP(){
    const cep = this.form.get('cep')?.value;
    if(cep){
      this.loading = true;
      this.serviceCEP.getCEP(cep).subscribe(
        (result: any) => {
          if (result && result.localidade) {
            this.form.patchValue({
              uf: result.uf,
              cidade: result.localidade
            });
            this.loading = false;
          } else {
            this.loading = false;
            this.onError('CEP não encontrado');
          }
        },
        (error) =>{
          this.loading = false;
          this.onError('CEP Inválido')
        }
      )
    }
  }

  private onError(error: string){
    this.snackBar.open(error, '', {duration: 3000});
  }
}
