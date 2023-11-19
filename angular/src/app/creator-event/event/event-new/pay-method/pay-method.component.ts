import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventNewService } from '../service/event-new.service';
import { ActivatedRoute } from '@angular/router';
import { PayService } from 'src/app/creator-event/services/pay/pay.service';

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.scss']
})
export class PayMethodComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: PayService,
    private serviceEvent: EventNewService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      evento: new FormGroup({
        id: new FormControl(this.getId())
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
    this.service.get(this.getId()).subscribe((obj) => {
      if(obj){
        this.update()
      }else{
        this.save()
      }
    })
  }

  private save(){
    this.service.save(this.form.value).subscribe(
      result => {
        this.onSuccess('Salvo com sucesso');
        this.serviceEvent.nextTab();
      },
      error => this.onError('Erro ao salvar')
    )
  }

  private update(){
    this.service.update(this.form.value, this.getId()).subscribe(
      result => {
        this.onSuccess('Atualizado com sucesso');
        this.serviceEvent.nextTab();
      },
      error => this.onError('Erro ao atualizar')
    )
  }

  private onSuccess(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private onError(msg: string){
    this.snackBar.open(msg, '', {duration: 5000});
  }

  private getId(): string{
    let id = '';
    this.route.paramMap.subscribe((url) => {
      const ID = url.get('id')
      if(ID){ id = ID}
    })
    return id;
  }
}
