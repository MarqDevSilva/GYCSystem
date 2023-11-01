import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  form = this.formBuilder.group({
    descricao:'',
    background:'#FFFFFF',
  })

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar){}
}
