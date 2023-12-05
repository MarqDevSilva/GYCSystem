import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SobreService } from 'src/app/services//sobre/sobre.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent{

  @Input() status: boolean = false;
  @Input() form = this.formBuilder.group({
    evento:{id: ''},
    id: '',
    habilitado: false,
    descricao:['', Validators.required],
    background:'#FFFFFF',
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: SobreService){}

  async onSubmit(){
    const id = this.form.get('id')?.value
    if(id){
      this.update(id)
    }else{
      this.save(this.status)
    }
  }

  private save(status: boolean){
    try {
      if(this.form.valid){
        this.form.patchValue({habilitado: status})
        this.service.save(this.form.value).subscribe(
          result => this.form.get('id')?.setValue(result.id),
          error => {throw new Error(error)});
      }else{
        throw new Error ("Preencha a descrição sobre o evento")
      }
    }
    catch (error: any) {
      throw error
    }
  }

  private async update(id: string){
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
}
