import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PayMethodService } from './service/pay-method.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventNewService } from '../service/event-new.service';

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.scss']
})
export class PayMethodComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: PayMethodService,
    private serviceEvent: EventNewService,
    private snackBar: MatSnackBar
  ){
    this.form = this.formBuilder.group({
      evento: new FormGroup({
        id: new FormControl(this.setId())
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
    const id = this.serviceEvent.getId();
    this.form.get('evento.id')?.setValue(id);
    this.service.save(this.form.value).subscribe(
      result => {
        this.onSuccess();
        this.serviceEvent.emitFormSaved();
        console.log(result);
        },
      error => this.onError())
  }

  private onSuccess(){
    this.snackBar.open('Formas de pagamento salvo', '', {duration: 5000});
  }

  private onError(){
    this.snackBar.open('Erro ao salvar formas de pagamento', '', {duration: 5000});
  }

  private setId(){
    const id = this.serviceEvent.getId();
    return id;
  }
}
