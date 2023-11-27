import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PayService } from 'src/app/services/pay/pay.service';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { EventNewService } from '../service/event-new.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.scss']
})
export class PayMethodComponent extends BaseComponentComponent{

  form: FormGroup;
  eventoId = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: PayService,
    private serviceEvent: EventNewService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog);

    if(this.getRouteId()){
      this.eventoId = this.getRouteId();
      this.preencherForm(this.eventoId);
    }

    this.form = this.formBuilder.group({
      evento: ({
        id: this.eventoId
      }),
      id: null,
      pix: false,
      cartao: false,
      cartaoParcelamento: 'none',
      boleto: false,
      boletoParcelamento: 'none',
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
    if(this.eventoId){
      this.service.get(this.eventoId).subscribe((result) => {
        !result ? this.save() : 
        result.id ? this.update(result.id) : 
        this.showSnackBar('Não foi possivel atualizar informações')
    });
    }else{
      this.showSnackBar('Não há evento para associar')
    }
  }

  private save(){
    this.service.save(this.form.value).subscribe(
      result => {
        this.showSnackBar('Salvo com sucesso');
        this.serviceEvent.nextTab();
      },
      error => this.showSnackBar('Erro ao salvar')
    )
  }

  private update(id: string){
    this.service.update(this.form.value, id).subscribe(
      result => {
        this.showSnackBar('Atualizado com sucesso');
      },
      error => this.showSnackBar('Erro ao atualizar')
    )
  } 

  private preencherForm(id: string){
    if(id){
      this.service.get(id).subscribe(values => {
        if(values !== null){
          this.form.setValue(values);
        }else{
          console.log('Não há formas de pagamento cadastradas')
        }});
    }
  }
}
