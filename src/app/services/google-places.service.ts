import { Injectable } from '@angular/core';

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
  private iw;
  private autocomplete;

  constructor() { }

  initMap(latitude: number = 33.79246, longitude: number = -118.185005, zoom: number = 14) {
    this.center = new google.maps.LatLng(latitude, longitude);

    let options = {
      center: this.center,
      zoom: zoom
    }

    this.map = new google.maps.Map(document.getElementById(this.mapId), options);
    this.placesService = new google.maps.places.PlacesService(this.map);
    // google.maps.event.addListener(this.map, 'tilesloaded', this.tilesLoaded);
    // this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
    // google.maps.event.addListener(this.autocomplete, 'place_changed', function() {
    //   this.showSelectedPlace();
    // })

    // this.createMarker(this.center, this.userMarkerPath);

    // this.placesService = new google.maps.places.PlacesService(this.map);
    // this.infoWindow = new google.maps.InfoWindow();
    // console.log('init map');
  }

  // After Maps is loaded, remove tilesloaded listener and add zoom_changed and dragend to perform a search on those events
  tilesLoaded() {
    // google.maps.event.clearListeners(this.map, 'tilesloaded');
    // google.maps.event.addListener(this.map, 'zoom_changed', this.search);
    // google.maps.event.addListener(this.map, 'dragend', this.search);
    // this.search();
  }

  search(searchTerm: string) {
    let req = {
      location: this.center,
      radius: 8047,
      keyword: searchTerm
    };

    let results = [];

    this.placesService.nearbySearch(req, (res, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // this.clearResults();
        // this.clearMarkers();

        for(let i = 0; i < res.length; i++) {
          results.push(res[i]);
        //   this.markers[i] = new google.maps.Marker({
        //     position: res[i].geometry.location,
        //     animation: google.maps.Animation.DROP
        //   });
        //   google.maps.event.addListener(this.markers[i], 'click', this.getDetails(res[i], i));
        //   setTimeout(this.dropMarker(i), i*100);
        //   this.addResult(res[i], i);
        }
        console.log(results);
      }
    });
    return results;
  }

  // showSelectedPlace() {
  //   this.clearResults();
  //   this.clearMarkers();

  //   let place = this.autocomplete.getPlace();
  //   this.map.panTo(place.geometry.location);
  //   this.markers[0] = new google.maps.Marker({
  //     position: place.geometry.location,
  //     map: this.map
  //   });

  //   this.iw = new google.maps.InfoWindow({
  //     content: this.getIWContent(place);
  //   });
  //   this.iw.open(this.map, this.markers[0]);
  // }

  // ------------------------------------------------------------ //
  // clearResults() {
  //   let results = document.getElementById('results');
  //   // clear child nodes
  // }

  clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      if (this.markers[i]) {
        this.markers[i].setMap(null);
        this.markers[i] == null;
      }
    }
    console.log('cleared markers');
  }

  // dropMarker(i) {
  //   return () => this.markers[i].setMap(this.map);
  // }

  // getCenter(): object {
  //   return this.center;
  // }

  // // MARKERS // 
  // createMarker(place, icon: string = "") {
  //   let position = place.geometry.location;
  //   let marker = new google.maps.Marker({
  //     map: this.map,
  //     position: position,
  //     icon: icon
  //   });

  //   // create click event for info window
  //   google.maps.event.addListener(marker, 'click', function() {
  //     console.log(marker.position + ' click');
  //   })

  //   return marker;
  // }

  // pushPlace(place) {
  //   this.markers.push(place);
  // }

  // printMarkersArr() {
  //   for(let i in this.markers) {
  //     console.log(this.markers[i]);
  //   }
  // }

  // statusOK() {
  //   return google.maps.places.PlacesServiceStatus.OK;
  // }
}