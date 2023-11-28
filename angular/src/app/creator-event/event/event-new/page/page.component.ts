import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CapaComponent } from './capa/capa.component';
import { LocalComponent } from './local/local.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { SobreComponent } from './sobre/sobre.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent{

  constructor(private snackBar: MatSnackBar) {}

  @ViewChild(CapaComponent) capaComponent?: CapaComponent;
  @ViewChild(SobreComponent) sobreComponent?: SobreComponent;
  @ViewChild(PalestrantesComponent) palestrantesComponent?: PalestrantesComponent;
  @ViewChild(ProgramacaoComponent) programacaoComponent?: ProgramacaoComponent;
  @ViewChild(LocalComponent) localComponent?: LocalComponent;

  onSobre = false;
  onPalestrantes = false;
  onProgramacao = false;
  onLocal = false;

  async onSubmit() {
    await this.capaComponent?.onSubmit();
    this.onSobre ? this.sobreComponent?.onSubmit() : null;
    this.onPalestrantes ? this.palestrantesComponent?.onSubmit() : null;
    this.onProgramacao ? this.programacaoComponent?.onSubmit() : null;
    this.onLocal ? this.localComponent?.onSubmit() : null;
  }
  
  onError(event: string) {
    this.snackBar.open("Ocorreu um erro ao salvar, verifique se preencheu todos os campos", "Ok")
  }
}
