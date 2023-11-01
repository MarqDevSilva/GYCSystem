import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ViaCEPService } from 'src/app/creator-event/shrared/utils/APIcep/via-cep.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  onSobre = false;
  onPalestrantes = false;
  onProgramacao = true;
  onLocal = false;

  loading= false;

  form = this.formBuilder.group({
    evento:{id:''},
    titulo:'',
    capa:[],
    preview: '',
    descricao:'',
    background:'#FFFFFF',
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

  onConsole(){
    console.log(this.form.value)
  }

  onFile(event: any) {
    this.readFile(event, this.form, 'capa', true);
    this.readFile(event, this.form, 'preview');
  }

  searchCEP(){
    this.loading = true;
    const cep = this.form.get('cep')?.value;
    if(cep){
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

  private readFile(event: any, form: FormGroup, controlName: string, asArrayBuffer: boolean = false) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (asArrayBuffer) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          form.get(controlName)?.setValue(uint8Array);
          } else {
          form.get(controlName)?.setValue(e.target.result);
          }
      };

      if (asArrayBuffer) {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsDataURL(file);
      }
    }
  }
}
