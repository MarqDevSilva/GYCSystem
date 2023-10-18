import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxMaskModule } from 'ngx-mask';

import { ReactiveFormsModule } from '@angular/forms';
import { CreatorEventRoutingModule } from './creator-event-routing.module';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { InfoBasicComponent } from './event/event-new/info-basic/info-basic.component';
import { CreatorFooterComponent } from './shrared/components/creator-footer/creator-footer.component';
import { CreatorNavBarComponent } from './shrared/components/creator-nav-bar/creator-nav-bar.component';
import { PayMethodComponent } from './event/event-new/pay-method/pay-method.component';


@NgModule({
  declarations: [
    CreatorFooterComponent,
    CreatorNavBarComponent,
    EventListComponent,
    EventNewComponent,
    InfoBasicComponent,
    PayMethodComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CreatorEventRoutingModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class CreatorEventModule { }
