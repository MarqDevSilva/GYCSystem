import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports:[
    GoogleMapComponent
  ]
})
export class SharedModule { }
