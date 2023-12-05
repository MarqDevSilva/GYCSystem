import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Palestrante } from 'src/app/shared/model/palestrante';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PalestranteService } from 'src/app/services/palestrante/palestrante.service';
import { BaseComponentComponent } from '../../../base-component/base-component.component';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.scss']
})
export class PalestrantesComponent extends BaseComponentComponent {

  eventoId = this.getRouteId();
  
  @Input() preview: string[] = [];
  @Input() palestrantes: Palestrante[] = []

  constructor(
    private service: PalestranteService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog);
  }

  async onSubmit(){
    if(this.eventoId){
      this.service.getAll(this.eventoId).subscribe((result) => {
        if(result && result.length > 0) {
            this.update();
          } else {
            this.save();
          }
      });
    }
  }

  private save(){
    this.service.saveAll(this.palestrantes).subscribe(result => result)
  }

  private update(){
    this.service.updateAll(this.palestrantes).subscribe(result => result)
  }

  onFile(event: any, index: number) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;

      while (this.preview.length <= index) {
        this.preview.push('');
      }

      this.preview[index] = base64String
      this.palestrantes[index].img = this.base64ToBytes(base64String)
    };

    reader.readAsDataURL(file);
  }

  onAdd(){
    this.palestrantes.push({evento:{id: this.eventoId}, id: null, nome:'', descricao:'', img:[]})
  }

  onDelete(index: number){
    const id =  this.palestrantes[index].id
    if(id){
      this.delete(id, index)
    }else{
      this.palestrantes.splice(index, 1)
      this.preview.slice(index, 1);
    }
  }

  private delete(id: string, index: number){
    const content = 'Você realmente deseja excluir essa palestrante?';
    this.dialogShow(content).afterClosed().subscribe(result => {
      if(result && id){
          this.service.delete(id).subscribe(
            result => {
              this.showSnackBar('Palestrante excluido');
              this.palestrantes.splice(index, 1)
              this.preview.slice(index, 1);
            },
            error => this.showSnackBar('Ocorreu um erro ao excluir palestrante'))
      }
    })
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
}
