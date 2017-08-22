import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places/google-places.service';
import { PlaceDetails } from '../../models/place-details';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  place;

  constructor(
    private _placesService: GooglePlacesService
  ) { }

  ngOnInit() {
    // this._placesService.getPlaceDetail();
    this.place = this._placesService.getPlace();
  }
}
