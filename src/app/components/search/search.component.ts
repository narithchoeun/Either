import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places.service';
import { SelectedPlacesService } from '../../services/shared/selected-places.service';
import { Place } from '../../models/Place';

declare var google: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit{
  searchTerm: string = '';
  searchResult = [];
  selectedRow: number;

  constructor(
    private _placesService: GooglePlacesService,
    private _selectedPlacesService: SelectedPlacesService
  ) { }

  ngOnInit() {
    this._placesService.initMap();
  }
  
  searchPlace() {
    // let latitude: number = 33.79246;
    // let longitude: number = -118.185005;
    // let center = new google.maps.LatLng(latitude, longitude);

    // let req = {
    //   location: center,
    //   radius: 8047,
    //   keyword: this.searchTerm
    // };

    // let results = [];
    console.log(this.searchTerm);
    this.searchResult = this._placesService.search(this.searchTerm);
  }

  showDetails(index: number) {
    this.selectedRow = index;
    console.log(this.searchResult[this.selectedRow]);
    this._selectedPlacesService.pushPlace(this.searchResult[this.selectedRow]);
  }
}