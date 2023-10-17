import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'creator', loadChildren: () => import('./creator-event/creator-event.module').then(m => m.CreatorEventModule) },
  { path: 'attendee', loadChildren: () => import('./subscriber-event/subscriber-event.module').then(m => m.SubscriberEventModule) },
  { path: 'event/:id', loadChildren: () => import('./page-event/page-event.module').then(m => m.PageEventModule) },
  { path: '', redirectTo: 'creator', pathMatch: 'full' }, // Redirecione para a área do criador por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
