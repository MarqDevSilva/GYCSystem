import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { ViaCEPService } from 'src/app/creator-event/shrared/utils/APIcep/via-cep.service';
import { LocalService } from './service/local.service';

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
    uf: ['', Validators.required],
    cidade:['', Validators.required],
    bairro:['', Validators.required],
    endereco:['', Validators.required],
    numero:['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private serviceCEP: ViaCEPService,
    private snackBar: MatSnackBar,
    private service: LocalService){}

  ngOnInit(): void {
    this.address$ = combineLatest(
    Object.values(this.form.controls).map(control => control.valueChanges.pipe(startWith(control.value)))
    ).pipe(
      map(values => values.join(', '))
    );
  }

  onSubmit(){
    if(this.form){
      this.service.save(this.form.value).subscribe(
        result => console.log(result)
      )
    }
  }

  searchCEP() {
    const cep = this.form.get('cep')?.value;
    if (cep) {
      this.loading = true;
      this.fetchCEP(cep);
    }
  }

  private fetchCEP(cep: string){
    this.serviceCEP.getCEP(cep).subscribe(
      (result: any) => {
        this.handleCEPResult(result);
      },
      (error) => {
        this.onError('CEP Inválido');
        this.loading = false;
      }
    );
  }

  private handleCEPResult(result: any) {
    if (result && result.localidade) {
      this.form.patchValue({
        uf: result.uf,
        cidade: result.localidade
      });
      this.loading = false;
    } else {
      this.onError('CEP não encontrado');
      this.loading = false;
    }
  }

  private onError(error: string){
    this.snackBar.open(error, '', {duration: 3000});
  }
}
