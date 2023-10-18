import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { CreatorEventRoutingModule } from './creator-event-routing.module';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { InfoBasicComponent } from './event/event-new/info-basic/info-basic.component';
import { CreatorFooterComponent } from './shrared/components/creator-footer/creator-footer.component';
import { CreatorNavBarComponent } from './shrared/components/creator-nav-bar/creator-nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatorFooterComponent,
    CreatorNavBarComponent,
    EventListComponent,
    EventNewComponent,
    InfoBasicComponent,
  ],
  imports: [
    CommonModule,
    CreatorEventRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CreatorEventModule { }
