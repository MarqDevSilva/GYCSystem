import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  capaPreview = '';

  onPalestrantes = false;
  onProgramacao = false;

  minDate: Date = new Date();

  page: any = {evento:{id:''}, titulo:'', capa:[], sobre:true, descricao:'', background:'#FFFFFF', local: false, cep:'', uf:'', cidade:'', bairro:'', endereco:'', numero:''}
  palestrantes: any[] = [{evento:{id:''}, nome:'', descricao:'', img:''}]
  programacao: any[] = [{evento:{id:''}, data:'', hInicial:'', hFinal:'', atividade:''}]

  constructor(){}

  onConsole(){
    console.log(this.page)
  }

  onFileCapa(event: any){
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const arrayBuffer = e.target.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        this.page.capa = uint8Array;
      };
      reader.readAsArrayBuffer(file);
    }
  }

  preview(event: any){
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.capaPreview = e.target.result
      };
      reader.readAsDataURL(file);
    }
  }


}
