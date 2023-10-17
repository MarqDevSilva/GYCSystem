import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreatorEventRoutingModule } from './creator-event-routing.module';
import { CreatorNavBarComponent } from './creator-nav-bar/creator-nav-bar.component';


@NgModule({
  declarations: [
    CreatorNavBarComponent
  ],
  imports: [
    CommonModule,
    CreatorEventRoutingModule
  ]
})
export class CreatorEventModule { }
