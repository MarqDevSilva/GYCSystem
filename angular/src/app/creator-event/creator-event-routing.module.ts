import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorNavBarComponent } from './shrared/components/creator-nav-bar/creator-nav-bar.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventNewComponent } from './event/event-new/event-new.component';


const routes: Routes = [
  {
    path: '',
    component: CreatorNavBarComponent,
    title: 'Home',
    children: [
      {path: 'list', component: EventListComponent, title: 'Eventos'},
      {path: 'new', component: EventNewComponent, title: 'Novo Evento'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreatorEventRoutingModule { }
