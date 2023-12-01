import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CapaService } from 'src/app/services/capa/capa.service';
import { Capa } from 'src/app/shared/model/capa';
import { BaseComponentComponent } from '../../../base-component/base-component.component';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent extends BaseComponentComponent{
  
  $capa: Observable<Capa> = new Observable<Capa>;
  eventoId = this.getRouteId()
  preview = '';

  @Output() error = new EventEmitter<string>;

  capa: Capa = {
    evento: { id: this.eventoId}, 
    id: '', titulo: '', img: []
  };

  constructor(
    private service: CapaService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)

      this.init()
  }

  async onSubmit(){
    if (this.capa.id) {
      await this.update(this.capa.id);
    } else {
      await this.save();
    }
  }

  private async save(){
    try {
      if(this.preview){
        this.capa.img = this.base64ToBytes(this.preview)
        this.service.save(this.capa).subscribe(
          result => this.capa.id = result.id,
          error => {throw new Error(error)})
      }else{
        throw new Error("Escolha uma imagem para a CAPA");
      }
    }
    catch (error: any) {
      throw error;
    }
  }

  private async update(id: string){
    try {
      this.capa.img = this.base64ToBytes(this.preview)
      this.service.update(this.capa, id).subscribe(
        result => result,
        error => {throw new Error(error)}) 
    } 
    catch (error: any) {
      throw (error);
    }
  }
  
  onFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.preview = base64String
    };

    reader.readAsDataURL(file);
  }

  private base64ToBytes(base64: string): number[] | null{

    let bytes = null;
    
    try {
      if(base64){
        const base64String =  base64.replace(/^data:image\/\w+;base64,/, '');
        const binaryString = window.atob(base64String);
        const length = binaryString.length;
        bytes = new Array<number>(length);
        
        for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i)}
      }
    } 
    catch (error: any) {
      throw (error)
    }
    
    return bytes;
  }

  private async init(){
    await this.getDados()
    await this.setDados()
  }

  private async getDados(){
    this.$capa = this.service.get(this.eventoId).pipe(map(result => result))
  }

  private async setDados(){
    const capa = await this.$capa.toPromise();
    if(capa){
      this.capa.evento = capa.evento
      this.capa.id = capa.id
      this.capa.titulo = capa.titulo
      this.preview = `data:image/png;base64,${capa.img}`
    }
  }
}
