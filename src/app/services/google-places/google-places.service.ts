import { Injectable } from '@angular/core';
import { PlaceResult } from '../../models/place-result';

// allows TS to recognize google object
declare var google: any;

@Injectable()
export class GooglePlacesService {
  private map: any;
  private mapId: string = 'map_canvas';
  private center;
  private userMarkerPath: string = '../../assets/icons/ic_person_pin_black_24px.svg';
  private placesService;
  private markers = [];

  constructor() { }

  initMap(lat: number = 33.79246, lng: number = -118.185005, zoom: number = 14) {
    this.center = { lat: lat, lng: lng};

    let options = {
      center: this.center,
      zoom: zoom
    }

    this.map = new google.maps.Map(document.getElementById(this.mapId), options);
    this.placesService = new google.maps.places.PlacesService(this.map);
  }

  // GOOGLE PLACE SEARCH //
  search = (searchTerm: string) => {
    return new Promise((resolve, reject) => {
      let req = {
        location: this.center,
        radius: 8047,
        keyword: searchTerm
      };

      let results = [];

      this.placesService.nearbySearch(req, (response, status, pagination) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          resolve(response);
        } else {
          reject(Error('error'));
        }
      });
    });
  };

  createMarker(place, label) {
    let marker = new google.maps.Marker({
      label: `${label}`,
      map: this.map,
      position: place.geometry.location,
      title: place.name,
    });
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

  //GOOGLE PLACE DETAILS
  getPlaceDetail(placeId: string) {
    let request = {
      placeId: placeId
    };    

    let callback = (place, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log('place detail ' + JSON.stringify(place, null, 2));
        // createMarker(place);
      }
    };

    this.placesService.getDetails(request, callback);
  }
  
}