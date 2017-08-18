import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places/google-places.service';
import { GeolocationService } from '../../services/geolocation/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _googlePlaces: GooglePlacesService,
    private _geolocationService: GeolocationService
  ) { }

  ngOnInit() {

    // let position = this._geolocationService.getPosition();
    // let latitude = position.coords.latitude;
    // let longitude = position.coords.longitude;
    this._googlePlaces.initMap();
  }

}
