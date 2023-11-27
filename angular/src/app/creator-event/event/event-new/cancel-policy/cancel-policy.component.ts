import { Component } from '@angular/core';
import { policy } from 'src/app/shared/model/policy';
import { EventNewService } from '../service/event-new.service';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CancelService } from 'src/app/services/cancel/cancel.service';

@Component({
  selector: 'app-cancel-policy',
  templateUrl: './cancel-policy.component.html',
  styleUrls: ['./cancel-policy.component.scss']
})
export class CancelPolicyComponent extends BaseComponentComponent{

  eventoId = this.getRouteId();
  policy: Partial<policy> = {evento:{id: this.eventoId}, policy: ''}

  constructor(
    private serviceEvent: EventNewService,
    private service: CancelService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute){super(snackBar, route, dialog)

      this.init();
    }

  onSubmit(){
    if(this.policy.id){
      this.update(this.policy.id);
    }else{
      this.save()
    }
  }

  private save(){
    this.service.save(this.policy).subscribe(
      result => {
        this.serviceEvent.nextTab();
        this.showSnackBar("Salvo com sucesso")
        })
  }

  private update(id: string){
    this.service.update(this.policy, id).subscribe(
      result => {
        this.showSnackBar("Atualizado")
      })
  }

  private async init(){
    this.service.get(this.eventoId).subscribe(
      result => this.policy = result
    )
  }
}
