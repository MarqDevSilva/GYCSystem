import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.scss']
})
export class PayMethodComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.form = this.formBuilder.group({
      evento: new FormGroup({
        id: new FormControl(null)
      }),
      pix: new FormControl(false),
      cartao: new FormControl(false),
      cartaoAVista: new FormControl({ value: false, disabled: true }),
      cartaoParcelamento: new FormControl({ value: 'none', disabled:true } ),
      boleto: new FormControl(false),
      boletoAVista: new FormControl({ value: false, disabled: true }),
      boletoParcelamento: new FormControl({ value: 'none', disabled:true } ),
    });
  }

  changeCartao(){
    if (this.form.get('cartao')?.value) {
      this.form.get('cartaoAPrazo')?.enable()
      this.form.get('cartaoParcelamento')?.enable();
    } else {
      this.form.get('cartaoAPrazo')?.disable();
      this.form.get('cartaoParcelamento')?.disable();
    }
  }

  changeBoleto(){
    if (this.form.get('boleto')?.value) {
      this.form.get('boletoAPrazo')?.enable()
      this.form.get('boletoParcelamento')?.enable();
    } else {
      this.form.get('boletoAPrazo')?.disable();
      this.form.get('boletoParcelamento')?.disable();
    }
  }

  onSubmit(){

  }
}
