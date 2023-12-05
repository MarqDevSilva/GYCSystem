import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SobreService } from 'src/app/services/sobre/sobre.service';
import { CapaComponent } from '../components/capa/capa.component';
import { LocalComponent } from '../components/local/local.component';
import { PalestrantesComponent } from '../components/palestrantes/palestrantes.component';
import { ProgramacaoComponent } from '../components/programacao/programacao.component';
import { SobreComponent } from '../components/sobre/sobre.component';
import { Palestrante } from 'src/app/shared/model/palestrante';
import { PalestranteService } from 'src/app/services/palestrante/palestrante.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent{

  eventoId = this.getRouteId();

  sobre = this.formBuilder.group({
    evento:{id: this.eventoId},
    id: '',
    habilitado: false,
    descricao:['', Validators.required],
    background:'#FFFFFF',
  })

  palestrantes: Palestrante[] = []
  preview: string[] = []

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private sobreService: SobreService,
    private palestranteService: PalestranteService,
    public route: ActivatedRoute,
  ) {
    this.init()
  }

  @ViewChild(CapaComponent) capaComponent?: CapaComponent;
  @ViewChild(SobreComponent) sobreComponent?: SobreComponent;
  @ViewChild(PalestrantesComponent) palestrantesComponent?: PalestrantesComponent;
  @ViewChild(ProgramacaoComponent) programacaoComponent?: ProgramacaoComponent;
  @ViewChild(LocalComponent) localComponent?: LocalComponent;

  onSobre = false;
  onPalestrantes = false;
  onProgramacao = false;
  onLocal = false;

  async onSubmit(){
    try {
      await this.capaComponent?.onSubmit().catch();
      if(this.onSobre){await this.sobreComponent?.onSubmit()}
      if(this.onPalestrantes){await this.palestrantesComponent?.onSubmit()} 

      this.snackBar.open("Configurações Salvas", '', {duration: 3000})
    } 
    catch (error: any) {
      this.snackBar.open(error.message, "OK")
    }
  }

  async init(){
    await this.getSobre()
    await this.getPalestrante();
  }

  async getSobre(){
    const sobre = await this.sobreService.get(this.eventoId).toPromise();
    if(sobre){
      this.sobre.setValue(sobre)
      if(sobre.habilitado){this.onSobre = sobre.habilitado}
    }
  }

  async getPalestrante(){
    const palestrante = await this.palestranteService.getAll(this.eventoId).toPromise()
    if(palestrante?.length){

      this.palestrantes = palestrante
      this.onPalestrantes = true
      
      for (const palestrant of palestrante) {
        if (palestrant.img) {
          const base64 = `data:image/png;base64,${palestrant.img}`
          this.preview.push(base64);
        } else {
          this.preview.push('');
        }
      }
    }
  }

  desabilitarSobre(){
    if(this.sobre.get('id')?.value && this.onSobre === false){
      this.sobre.patchValue({habilitado: this.onSobre})
      this.sobreService.update(this.sobre.value, this.eventoId).subscribe(
        result => result,
        error => console.error("Erro Sobre")) 
    }
  }

  public getRouteId(): string{
    return this.route.snapshot.paramMap.get('id') ?? '';
  }
}
