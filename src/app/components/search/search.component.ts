import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places.service';
import { Place } from '../../models/Place';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit{
  searchTerm: string = '';
  searchResult = [];
  selectedRow: number;

  constructor(private _placesService: GooglePlacesService) { }

  ngOnInit() {
    this._placesService.initMap();
  }
  
  searchPlace() {
    this.searchResult = [];
    console.log(this.searchTerm);
    this.searchResult = this._placesService.search(this.searchTerm);
  }

  showDetails(index: number) {
    this.selectedRow = index;
    console.log(this.searchResult[this.selectedRow]);
  }
}