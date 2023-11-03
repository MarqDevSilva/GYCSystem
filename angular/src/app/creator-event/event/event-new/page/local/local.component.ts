import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { ViaCEPService } from 'src/app/creator-event/shrared/utils/APIcep/via-cep.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit{

  address$: Observable<string> = new Observable<string>;
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
    private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.address$ = combineLatest(
      Object.values(this.form.controls).map(control => control.valueChanges.pipe(startWith(control.value)))
    ).pipe(
      map(values => values.join(', '))
    );
  }

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
