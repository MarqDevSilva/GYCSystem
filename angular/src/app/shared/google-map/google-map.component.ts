import { MapAPIService } from './service/map-api.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @Input() address: string | null = null;
  @Output() lat?: number;
  @Output() lng?: number;

  apiLoaded: boolean = false;

  options: google.maps.MapOptions = {
    center: {lat: -15.4963683, lng: -52.4202686},
    zoom: 4
  };

  markerOptions: google.maps.MarkerOptions = {draggable: true};
  markerPositions!: google.maps.LatLngLiteral;

  constructor(
      private mapAPIService: MapAPIService,
      private geocoder: MapGeocoder) {
  }

  ngOnInit(){
    this.loadGoogleMaps();
  }

  loadGoogleMaps() {
    this.mapAPIService.loadAPI().subscribe((apiLoadedValue: boolean) => {
      this.apiLoaded = apiLoadedValue});
  }

  geoCoder(){
    this.geocoder.geocode({
      address: this.address
    }).subscribe(({results}) => {
      if (results.length > 0) {
        const location = results[0].geometry.location;
        this.lat = location.lat();
        this.lng = location.lng();

        console.log('Latitude:', this.lat);
        console.log('lngitude:', this.lng);
      } else {
        console.log('Nenhum resultado encontrado para o endereço fornecido.');
      }
    });
  }
}
