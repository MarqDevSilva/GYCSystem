import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskModule } from 'ngx-mask';
import { QuillModule } from 'ngx-quill';

import { CreatorEventRoutingModule } from './creator-event-routing.module';
import { EventListComponent } from './event/event-list/event-list.component';
import { AccommodationComponent } from './event/event-new/accommodation/accommodation.component';
import { CancelPolicyComponent } from './event/event-new/cancel-policy/cancel-policy.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { FormComponent } from './event/event-new/form/form.component';
import { InfoBasicComponent } from './event/event-new/info-basic/info-basic.component';
import { CapaSobreLocalComponent } from './event/event-new/page/capa-sobre-local/capa-sobre-local.component';
import { PalestrantesComponent } from './event/event-new/page/palestrantes/palestrantes.component';
import { ProgramacaoComponent } from './event/event-new/page/programacao/programacao.component';
import { PayMethodComponent } from './event/event-new/pay-method/pay-method.component';
import { SnackComponent } from './event/event-new/snack/snack.component';
import { CreatorFooterComponent } from './shrared/components/creator-footer/creator-footer.component';
import { CreatorNavBarComponent } from './shrared/components/creator-nav-bar/creator-nav-bar.component';



@NgModule({
  declarations: [
    CreatorFooterComponent,
    CreatorNavBarComponent,
    EventListComponent,
    EventNewComponent,
    InfoBasicComponent,
    PayMethodComponent,
    AccommodationComponent,
    SnackComponent,
    FormComponent,
    CancelPolicyComponent,
    PalestrantesComponent,
    ProgramacaoComponent,
    CapaSobreLocalComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatSlideToggleModule,
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
    NgxMaskModule.forRoot(),
    QuillModule.forRoot()
  ]
})
export class CreatorEventModule { }
