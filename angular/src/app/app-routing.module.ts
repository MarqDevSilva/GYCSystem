import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./creator-event/creator-event.module').then(m => m.CreatorEventModule) },
  { path: 'user', loadChildren: () => import('./subscriber-event/subscriber-event.module').then(m => m.SubscriberEventModule) },
  { path: 'event/:id', loadChildren: () => import('./page-event/page-event.module').then(m => m.PageEventModule) },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
