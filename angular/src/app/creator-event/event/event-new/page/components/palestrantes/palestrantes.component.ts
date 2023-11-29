import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Palestrante } from 'src/app/shared/model/palestrante';

import { EventNewService } from '../../../service/event-new.service';
import { PalestrantesService } from './service/palestrantes.service';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.scss']
})
export class PalestrantesComponent {

  palestrantes: Palestrante[] = []

  constructor(
    private service: PalestrantesService,
    private snackBar: MatSnackBar,
    private serviceEvent: EventNewService
  ){}

  onSubmit(){
    if(this.palestrantes.length){
      this.service.save(this.palestrantes).subscribe(
        result => console.log(result),
        error => this.onError('Ocorreu um erro inesperado ao salvar os PALESTRANTES')
      )
    }else{
      this.onError('Preencha os PALESTRANTES')
    }
  }

  onFile(event: any, index: number) {
    this.readFile(event, this.palestrantes[index], 'img', true);
    this.readFile(event, this.palestrantes[index], 'preview');
  }

  onAdd(){
    const id = this.setId();
    if(id){
      this.palestrantes.push({evento:{id: id}, nome:'', descricao:'', img:[], preview:''})
    }else{
      this.onError('Não há evento para relacionar esses palestrantes ao salvar')
    }
  }

  onDelete(index: number){
    this.palestrantes.splice(index, 1);
  }

  private readFile(event: any, targetObject: any, targetProperty: string, asArrayBuffer: boolean = false) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      targetObject[targetProperty] = asArrayBuffer
        ? new Uint8Array(e.target.result as ArrayBuffer)
        : e.target.result;
    };

    asArrayBuffer ? reader.readAsArrayBuffer(file) : reader.readAsDataURL(file);
  }

  private onError(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private setId(){
    const id = this.serviceEvent.getId();
    return id;
  }
}
