import { Component, ViewChild } from '@angular/core';
import { SobreComponent } from './sobre/sobre.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { CapaComponent } from './capa/capa.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { LocalComponent } from './local/local.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  @ViewChild(CapaComponent) capaComponent?: CapaComponent;
  @ViewChild(SobreComponent) sobreComponent?: SobreComponent;
  @ViewChild(PalestrantesComponent) palestrantesComponent?: PalestrantesComponent;
  @ViewChild(ProgramacaoComponent) programacaoComponent?: ProgramacaoComponent;
  @ViewChild(LocalComponent) localComponent?: LocalComponent;

  onSobre = false;
  onPalestrantes = false;
  onProgramacao = false;
  onLocal = false;

  onSubmit(){
    this.capaComponent?.onSubmit();
    this.onSobre ? this.sobreComponent?.onSubmit() : null;
    this.onPalestrantes ? this.palestrantesComponent?.onSubmit() : null;
    this.onProgramacao ? this.programacaoComponent?.onSubmit() : null;
    this.onLocal ? this.localComponent?.onSubmit() : null;
  }
}
