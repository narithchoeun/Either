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

  constructor(private _placesService: GooglePlacesService) { }

  ngOnInit() {
    this._placesService.initMap();
  }
  
  searchPlace() {
    this.searchResult = [];
    console.log(this.searchTerm);
    this.searchResult = this._placesService.search(this.searchTerm);


    // let req = {
    //   location: this._placesService.getCenter(),
    //   radius: 8047,
    //   // types: ['cafe']
    //   keyword: this.searchTerm
    // };

    // this._placesService.search(req, (res, status) => {
    //   console.log(req);
    //   if (status == this._placesService.statusOK()) {
    //     for (var i = 0; i < res.length; i++) {
    //       this.searchResult.push(res[i]);
    //       // var obj = JSON.stringify(res[i], null, 2);
    //       // console.log(obj);
    //       // this._placesService.pushPlace(JSON.stringify(res[i], null, 2));
    //       // this._placesService.pushPlace(this._placesService.createMarker(res[i]));
    //     }
    //     console.log(this.searchResult);
    //   }
    // });
  }

  showDetails(place) {
    console.log(place);
  }
}