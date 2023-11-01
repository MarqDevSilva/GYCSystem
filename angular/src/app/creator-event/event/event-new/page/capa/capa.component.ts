import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent {

  form = this.formBuilder.group({
    evento:{id:''},
    titulo:'',
    capa:[],
    preview: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ){}

  onFile(event: any) {
    this.readFile(event, this.form, 'capa', true);
    this.readFile(event, this.form, 'preview');
  }

  private readFile(event: any, form: FormGroup, controlName: string, asArrayBuffer: boolean = false) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (asArrayBuffer) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          form.get(controlName)?.setValue(uint8Array);
          } else {
          form.get(controlName)?.setValue(e.target.result);
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
