import { MapAPIService } from './service/map-api.service';
import { Component, Input, OnInit} from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @Input() address: string | null = null;
  lat: number = -14.235004;
  lng: number = -51.925280;

  apiLoaded: boolean = false;
  center = {lat: this.lat, lng: this.lng};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: true};
  markerPosition: google.maps.LatLngLiteral = { lat: this.lat, lng: this.lng };;

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
        this.markerPosition = { lat: this.lat, lng: this.lng };
        this.center = { lat: this.lat, lng: this.lng };
        this.zoom = 15;
      } else {
        console.log('Nenhum resultado encontrado para o endereço fornecido.');
      }
    });
  }
}
