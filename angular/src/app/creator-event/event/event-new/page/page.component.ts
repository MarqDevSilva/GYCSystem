import { Component, ViewChild } from '@angular/core';
import { SobreComponent } from './sobre/sobre.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { CapaComponent } from './capa/capa.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  @ViewChild(CapaComponent) capaComponent?: CapaComponent;
  @ViewChild(SobreComponent) sobreComponent?: SobreComponent;
  @ViewChild(PalestrantesComponent) palestrantesComponent?: PalestrantesComponent;

  onSobre = false;
  onPalestrantes = false;
  onProgramacao = false;
  onLocal = false;

  onSubmit(){
    this.capaComponent?.onSubmit();

    if(this.onSobre === true){
      this.sobreComponent?.onSubmit();
    }

    if(this.onPalestrantes === true){
      this.palestrantesComponent?.onSubmit();
    }
  }
}
