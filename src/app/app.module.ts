import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriberNavbarComponent } from './shared/components/subscriber-navbar/subscriber-navbar.component';
import { CreatorNavbarComponent } from './shared/components/creator-navbar/creator-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberNavbarComponent,
    CreatorNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
