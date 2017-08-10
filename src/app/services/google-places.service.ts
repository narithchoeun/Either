import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Constants } from '../misc/constants';

// allows TS to recognize google object
declare var google: any;

@Injectable()
export class GooglePlacesService {
  private map;
  private mapId: string = 'map_canvas';
  private center;
  private userMarkerPath: string = '../../assets/icons/ic_person_pin_black_24px.svg';
  private placesService;
  private markers = [];
  private apiKey = new Constants().ApiKey;
  private results: any = [];
  private inProgress: boolean = true;

  constructor(private http: HttpClient) { }

  initMap(latitude: number = 33.79246, longitude: number = -118.185005, zoom: number = 14) {
    this.center = new google.maps.LatLng(latitude, longitude);

    let options = {
      center: this.center,
      zoom: zoom
    }

    this.map = new google.maps.Map(document.getElementById(this.mapId), options);
    this.placesService = new google.maps.places.PlacesService(this.map);
  }

  search(searchTerm: string) {
    let req = {
      location: this.center,
      radius: 8047,
      keyword: searchTerm
    };

    let results = [];

    this.placesService.nearbySearch(req, (response, status) => {
      if(status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < response.length; i++) {
          results.push(response[i]);
        }
        console.log(results);
        return results;
        // console.log(response);
        // return response;
      };
    });
      
    return results;
  }

  clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      if (this.markers[i]) {
        this.markers[i].setMap(null);
        this.markers[i] == null;
      }
    }
    console.log('cleared markers');
  }
}