import { Component, OnInit } from '@angular/core';
import { SelectedPlacesService } from './services/selected-places/selected-places.service';
import { GeolocationService } from './services/geolocation/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit { 
  constructor(
    private _selectedPlacesService: SelectedPlacesService,
    private _geolocationService: GeolocationService
  ) { }

  ngOnInit() {

  }

}
