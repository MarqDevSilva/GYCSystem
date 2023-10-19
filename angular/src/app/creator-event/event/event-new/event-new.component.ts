import { Component, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { EventNewService } from './service/event-new.service';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss']
})
export class EventNewComponent {

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  constructor(private serviceEvent: EventNewService){
    this.serviceEvent.formSaved$.subscribe(() => {
      this.next();
    });
  }

  private next(){
    const currentIndex = this.tabGroup.selectedIndex;
    const tabCount = this.tabGroup._tabs.length;
    if (currentIndex !== null && currentIndex < tabCount - 1) {
      this.tabGroup.selectedIndex = currentIndex + 1;
    }
  }
}
