import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { EventNewService } from './service/event-new.service';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss']
})
export class EventNewComponent implements OnInit {

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  selectedTabIndex: number = 0;

  tab: boolean = true;

  constructor(
    private serviceEvent: EventNewService,
    private router: Router,
    private route: ActivatedRoute){

    //Habilitar guias se tiver id para associar
    this.route.paramMap.subscribe((parametro) => {
      const id = parametro.get('id');
      if(id){
        this.tab = false
      }else{
        this.tab = true
      }
    })

    //Ir para a proxima tab
    this.serviceEvent.nextTab$.subscribe(() => {
      this.next();
    });

    //Navegar para rota new com id do evento
    this.serviceEvent.routerId$.subscribe(() => {
      this.rotaId();
    })
  }

  ngOnInit(): void{}

  private next(){
    const currentIndex = this.tabGroup.selectedIndex;
    const tabCount = this.tabGroup._tabs.length;
    if (currentIndex !== null && currentIndex < tabCount - 1) {
      this.tabGroup.selectedIndex = currentIndex + 1;
    }
  }

  private rotaId(){
    this.router.navigate(['event', this.serviceEvent.getId()])
  }
}
