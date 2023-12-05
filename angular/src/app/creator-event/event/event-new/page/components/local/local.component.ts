import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { CepService } from 'src/app/shared/cep/cep.service';
//import { LocalService } from './service/local.service';
import { CEP } from 'src/app/shared/model/cep';
import { EventNewService } from '../../../service/event-new.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit{

  address$: Observable<string> = new Observable<string>;

  form = this.formBuilder.group({
    evento:{id:  new FormControl(this.setId())},
    cep:['', Validators.required],
    uf: ['', Validators.required],
    cidade:['', Validators.required],
    bairro:['', Validators.required],
    endereco:['', Validators.required],
    numero:['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private cep: CepService,
    private snackBar: MatSnackBar,
    //private service: LocalService,
    private serviceEvent: EventNewService){}

    ngOnInit(){
      const controlsToTrack = ['cep', 'uf', 'cidade', 'bairro', 'endereco', 'numero'];

      this.address$ = combineLatest(
        controlsToTrack.map(controlName => {
          const control = this.form.get(controlName);
          if(control){
            return control.valueChanges.pipe(startWith(control.value));
          }
          return null;
        })
      ).pipe(
        map(values => values.join(', '))
      );
    }

  // onSubmit(){
  //   if(this.form.valid){
  //     this.service.save(this.form.value).subscribe()
  //   }else{
  //     this.onError('Preencha os campos do LOCAL corretamente')
  //   }
  // }

  getCep(){
    const cep = this.form.get('cep')?.value
    cep ? this.cep.getCEP(cep).subscribe(data => {
      if(!data.valid){
        this.onError(data.message);
      }else{
        this.setCep(data.data)
      }
    })
    : null
  }

  private setCep(data: CEP){
    this.form.get('uf')?.setValue(data.uf);
    this.form.get('cidade')?.setValue(data.localidade);
  }

  private onError(error: string){
    this.snackBar.open(error, '', {duration: 3000});
  }

  private setId(){
    const id = this.serviceEvent.getId();
    return id;
  }
}
