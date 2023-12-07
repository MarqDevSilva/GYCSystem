import { MapAPIService } from './service/map-api.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MapGeocoder, MapMarker } from '@angular/google-maps';

interface latLng{
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @ViewChild(MapMarker) marker: MapMarker | undefined;

  @Input() address: string | null = null;
  @Input() lat: number = -14.235004;
  @Input() lng: number = -51.925280;
  @Output() latitude: EventEmitter<number> = new EventEmitter<number>()
  @Output() longitude: EventEmitter<number> = new EventEmitter<number>()

  apiLoaded: boolean = false;
  center = {lat: this.lat, lng: this.lng};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: true};
  markerPosition: google.maps.LatLngLiteral = { lat: this.lat, lng: this.lng };

  constructor(
    private mapAPIService: MapAPIService,
    private geocoder: MapGeocoder) {
    }

  ngOnInit(){
    window.addEventListener('beforeunload', this.clearSession.bind(this));

    const status = sessionStorage.getItem('googleMapsApiLoaded');
    if (status === 'true') {
      this.apiLoaded = true;
      this.initMapListener()
    }else{
      this.loadGoogleMaps();
    }

    if(this.lat != -14.235004 && this.lat != 0){
      this.markerPosition = { lat: this.lat, lng: this.lng };
      this.center = { lat: this.lat, lng: this.lng };
       this.zoom = 15;
    }else{
      this.lat = -14.235004;
      this.lng = -51.925280;
    }
  }

  clearSession() {
    sessionStorage.removeItem('googleMapsApiLoaded');
  }

  async loadGoogleMaps() {
    this.mapAPIService.loadAPI().subscribe((apiLoadedValue: boolean) => {
      this.apiLoaded = apiLoadedValue
      sessionStorage.setItem('googleMapsApiLoaded', 'true');
      this.initMapListener()
    });
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
        this.latitude.emit(this.lat);
        this.longitude.emit(this.lng);
      } else {
        console.log('Nenhum resultado encontrado para o endereço fornecido.');
      }
    });
  }
  
  initMapListener() {
    if (this.apiLoaded) {
      google.maps.event.addListener(this.markerOptions, 'dragend', (event: google.maps.MapMouseEvent) => {
        console.log(event.latLng?.toJSON());
        if(event.latLng?.toJSON()){this.onMarker(event.latLng?.toJSON())}
      });
    }
  }

  private onMarker(latLnj: latLng) {
    this.latitude.emit(latLnj.lat);
    this.longitude.emit(latLnj.lng);
  }
}
