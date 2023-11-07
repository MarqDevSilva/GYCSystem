import { Component } from '@angular/core';
import { policy } from 'src/app/shared/model/policy';
import { EventNewService } from '../service/event-new.service';
import { CancelPolicyService } from './service/cancel-policy.service';

@Component({
  selector: 'app-cancel-policy',
  templateUrl: './cancel-policy.component.html',
  styleUrls: ['./cancel-policy.component.scss']
})
export class CancelPolicyComponent {

  policy: Partial<policy> = {evento:{id: this.setId()}, policy: 'flexivel'}

  constructor(
    private serviceEvent: EventNewService,
    private service: CancelPolicyService
  ){}

  onSubmit(){
    this.service.save(this.policy).subscribe(
      result => {
        this.serviceEvent.emitFormSaved();
        console.log(result);
        })
  }

  private setId(){
    const id = this.serviceEvent.getId();
    return id;
  }
}
