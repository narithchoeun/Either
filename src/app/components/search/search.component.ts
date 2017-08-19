import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places/google-places.service';
import { SelectedPlacesService } from '../../services/selected-places/selected-places.service';
import { PlaceResult } from '../../models/place-result';

declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit{
  searchTerm: string = '';
  searchResult;
  selectedRow: number;
  private isAdded: boolean = false;

  constructor(
    private _placesService: GooglePlacesService,
    private _selectedPlacesService: SelectedPlacesService
  ) { }

  ngOnInit() {
    this._placesService.initMap();
  }
  
  searchPlace() {
    console.log(this.searchTerm);
    this._placesService.search(this.searchTerm)
      .then((response) => {
        console.log(response);
        this.searchResult = response;
        this.drawMarkers(this.searchResult);
      }, (err) => {
        console.error(err);
      });
  }

  private drawMarkers(results) {
    for(let i = 0; i < results.length; i++) {
      this._placesService.createMarker(results[i], i+1);
    }
  }

  showDetails(index: number) {
    this.selectedRow = index;
    let place = this.searchResult[this.selectedRow];
    console.log(place);

    // let details = this._placesService.getPlaceDetail(place.place_id);
    // console.log('details ' + details);
  }

  addToList(index: number) {
    this.selectedRow = index;
    this._selectedPlacesService.pushPlace(this.searchResult[this.selectedRow]);
    this.isAdded = true;
    setTimeout(() => {
      $('.alert').alert('close');
      this.isAdded = false;
    }, 2000);
  }

}