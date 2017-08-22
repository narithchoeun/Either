import { Injectable } from '@angular/core';
import { PlaceResult } from '../../models/place-result';
import { PlaceDetails } from '../../models/place-details';

// allows TS to recognize google object
declare var google: any;

@Injectable()
export class GooglePlacesService {
  private map: any;
  private mapId: string = 'map_canvas';
  private center;
  private userMarkerPath: string = '../../assets/icons/ic_person_pin_black_24px.svg';
  private placesService;
  private placeResult = [];
  private markers = [];
  private place;

  constructor() { }

  initMap(lat: number = 33.79246, lng: number = -118.185005, zoom: number = 14) {
    this.center = { lat: lat, lng: lng };

    let options = {
      center: this.center,
      zoom: zoom
    }

    this.map = new google.maps.Map(document.getElementById(this.mapId), options);
    this.placesService = new google.maps.places.PlacesService(this.map);
  }

  updateMap(center: {}) {
    this.map.setCenter(center);
    this.map.panTo(this.map.getCenter());
  }

  // GOOGLE PLACE SEARCH //
  search = (searchTerm: string) => {
    return new Promise((resolve, reject) => {
      let req = {
        location: this.center,
        radius: 8047,
        keyword: searchTerm
      };

      this.placesService.nearbySearch(req, (response, status, pagination) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          this.placeResult = response;
          resolve(response);
        } else {
          reject(Error('error'));
        }
      });
    });
  };

  // Return last search result 
  getPlaceResult() {
    return this.placeResult;
  }

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
  getPlaceDetail = (placeId: string) => {
    return new Promise((resolve, reject) => {
      let request = { placeId: placeId };  

      this.placesService.getDetails(request, (place, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          // console.log('place detail ' + JSON.stringify(place, null, 2));
          this.place = place;
          resolve(place);
        } else {
          reject(Error('Could not find place'));
        }
      });
    });
  }

  getPlace() {
    return this.place;
  }

}