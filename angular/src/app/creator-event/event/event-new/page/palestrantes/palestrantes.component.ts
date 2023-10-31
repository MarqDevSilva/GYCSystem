import { Component } from '@angular/core';
import { Palestrante } from 'src/app/creator-event/shrared/model/palestrante';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.scss']
})
export class PalestrantesComponent {

  palestrantes: Palestrante[] = []

  onFile(event: any, index: number) {
    this.readFile(event, this.palestrantes[index], 'img', true);
    this.readFile(event, this.palestrantes[index], 'preview');
  }

  onAdd(){
    this.palestrantes.push({evento:{id:''}, nome:'', descricao:'', img:[], preview:''})
  }

  onDelete(index: number){
    this.palestrantes.splice(index, 1);
  }

  private readFile(event: any, targetObject: any, targetProperty: string, asArrayBuffer: boolean = false) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (asArrayBuffer) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          targetObject[targetProperty] = uint8Array;
        } else {
          targetObject[targetProperty] = e.target.result;
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
