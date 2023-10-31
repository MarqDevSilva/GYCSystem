import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  onPalestrantes = true;
  onProgramacao = false;

  minDate: Date = new Date();

  page: any = {
    evento:{id:''},
    titulo:'',
    capa:[],
    preview: '',
    sobre:false,
    descricao:'',
    background:'#FFFFFF',
    local: false,
    cep:'',
    uf:'',
    cidade:'',
    bairro:'',
    endereco:'',
    numero:''}

  programacao: any[] = [{evento:{id:''}, data:'', hInicial:'', hFinal:'', atividade:''}]

  constructor(){}

  onConsole(){
    console.log(this.page)
  }

  onFileCapa(event: any) {
    this.readFileArray(event, this.page, 'capa');
  }



  previewCapa(event: any){
    this.readFile(event, this.page, 'preview');
  }



  addProgramacao(){
    this.programacao.push({evento:{id:''}, data:'', hInicial:'', hFinal:'', atividade:''})
  }

  private readFile(event: any, targetObject: any, targetProperty: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        targetObject[targetProperty] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  private readFileArray(event: any, targetObject: any, targetProperty: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const arrayBuffer = e.target.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        targetObject[targetProperty] = uint8Array;
      };
      reader.readAsArrayBuffer(file);
    }
  }
}
