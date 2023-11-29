import { CommonModule, NgForOf, NgIf } from '@angular/common';
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
import { SharedModule } from '../shared/shared.module';
import { CreatorEventRoutingModule } from './creator-event-routing.module';
import { EventListComponent } from './event/event-list/event-list.component';
import { AccommodationComponent } from './event/event-new/accommodation/accommodation.component';
import { CancelPolicyComponent } from './event/event-new/cancel-policy/cancel-policy.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { FormComponent } from './event/event-new/form/form.component';
import { InfoBasicComponent } from './event/event-new/info-basic/info-basic.component';
import { CapaComponent } from './event/event-new/page/components/capa/capa.component';
import { LocalComponent } from './event/event-new/page/components/local/local.component';
import { PageComponent } from './event/event-new/page/page-container/page.component';
import { PalestrantesComponent } from './event/event-new/page/components/palestrantes/palestrantes.component';
import { ProgramacaoComponent } from './event/event-new/page/components/programacao/programacao.component';
import { SobreComponent } from './event/event-new/page/components/sobre/sobre.component';
import { PayMethodComponent } from './event/event-new/pay-method/pay-method.component';
import { SnackComponent } from './event/event-new/snack/snack.component';
import { CreatorFooterComponent } from '../shared/components/creator-footer/creator-footer.component';
import { CreatorNavBarComponent } from '../shared/components/creator-nav-bar/creator-nav-bar.component';
import { BaseComponentComponent } from './event/event-new/base-component/base-component.component';


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
    PageComponent,
    PalestrantesComponent,
    ProgramacaoComponent,
    CapaComponent,
    SobreComponent,
    LocalComponent,
    BaseComponentComponent,
  ],
  imports: [
    CommonModule,
    NgForOf,
    NgIf,
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
    SharedModule,
    NgxMaskModule.forRoot(),
    QuillModule.forRoot()
  ]
})
export class CreatorEventModule { }
