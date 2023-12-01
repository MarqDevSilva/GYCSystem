import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CapaComponent } from '../components/capa/capa.component';
import { LocalComponent } from '../components/local/local.component';
import { PalestrantesComponent } from '../components/palestrantes/palestrantes.component';
import { ProgramacaoComponent } from '../components/programacao/programacao.component';
import { SobreComponent } from '../components/sobre/sobre.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent{

  constructor(
    private snackBar: MatSnackBar
  ) {}

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

      this.snackBar.open("Configurações Salvas", '', {duration: 3000})
    } 
    catch (error: any) {
      this.snackBar.open(error.message, "OK")
    }
  }
}
