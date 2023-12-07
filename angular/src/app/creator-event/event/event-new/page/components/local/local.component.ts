import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { LocalService } from 'src/app/services/local/local.service';
import { CepService } from 'src/app/shared/cep/cep.service';
import { CEP } from 'src/app/shared/model/cep';
import { BaseComponentComponent } from '../../../base-component/base-component.component';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent extends BaseComponentComponent implements OnInit{

  eventoId = this.getRouteId();

  address$: Observable<string> = new Observable<string>;

  @Input() status: boolean = false;
  @Input() form = this.formBuilder.group({
    evento:{id:  ''},
    id:'',
    cep:['', Validators.required],
    uf: ['', Validators.required],
    cidade:['', Validators.required],
    bairro:['', Validators.required],
    endereco:['', Validators.required],
    numero:[0, Validators.required],
    lng: 0,
    lat: 0,
    habilitado: false
  })

  constructor(
    private formBuilder: FormBuilder,
    private cep: CepService,
    private service: LocalService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)
    
    }

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

  async onSubmit(){
    const id = this.form.get('id')?.value
    if(id){
      this.update(id)
    }else{
      this.save()
    }
  }

  private save(){
    try {
      if(this.form.valid){
        this.form.patchValue({habilitado: this.status})
        this.service.save(this.form.value).subscribe(
          result => console.log(result)
        )
      }else{
        throw new Error('Preencha os campos do LOCAL corretamente')
      }
    } catch (error: any) {
      throw error
    }
  }

  private update(id: string){
    try {
      this.form.patchValue({habilitado: this.status})
      this.service.update(this.form.value, id).subscribe(
        result => result,
        error => {throw new Error(error)}) 
    } 
    catch (error: any) {
      throw error;
    }
  }

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

  setLat(event: number){
    this.form.get("lat")?.setValue(event)
    console.log(this.form.value)
  }

  setLng(event: number){
    this.form.get("lng")?.setValue(event)
  }
}
