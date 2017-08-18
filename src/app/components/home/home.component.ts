import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places/google-places.service';
import { GeolocationService } from '../../services/geolocation/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  position;

  constructor(
    private _googlePlaces: GooglePlacesService,
    private _geolocationService: GeolocationService
  ) { }

  ngOnInit() {
    this._geolocationService.getLocation()
      .then((response: Position) => {
        console.log(response);
        let latitude = response.coords.latitude;
        let longitude = response.coords.longitude;
        this._googlePlaces.initMap(latitude, longitude);
      });
  }

}
