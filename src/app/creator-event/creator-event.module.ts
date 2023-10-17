import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { CreatorEventRoutingModule } from './creator-event-routing.module';
import { CreatorFooterComponent } from './shrared/components/creator-footer/creator-footer.component';
import { CreatorNavBarComponent } from './shrared/components/creator-nav-bar/creator-nav-bar.component';


@NgModule({
  declarations: [
    CreatorFooterComponent,
    CreatorNavBarComponent
  ],
  imports: [
    CommonModule,
    CreatorEventRoutingModule,
    MatToolbarModule
  ]
})
export class CreatorEventModule { }
