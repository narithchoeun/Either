import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _googlePlaces: GooglePlacesService) { }

  ngOnInit() {
    this._googlePlaces.initMap();
  }

}
