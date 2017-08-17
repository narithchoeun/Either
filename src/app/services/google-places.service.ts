import { Injectable } from '@angular/core';

// allows TS to recognize google object
declare var google: any;

@Injectable()
export class GooglePlacesService {
  private map: any;
  private mapId: string = 'map_canvas';
  private center;
  private userMarkerPath: string = '../../assets/icons/ic_person_pin_black_24px.svg';
  private placesService;
  private markers: any = [];

  constructor() { }

  initMap(latitude: number = 33.79246, longitude: number = -118.185005, zoom: number = 14) {
    this.center = new google.maps.LatLng(latitude, longitude);

    let options = {
      center: this.center,
      zoom: zoom
    }

    this.map = new google.maps.Map(document.getElementById(this.mapId), options);
    this.placesService = new google.maps.places.PlacesService(this.map);
  }

  // GOOGLE PLACE SEARCH // 
  search(searchTerm: string) {
    let req = {
      location: this.center,
      radius: 8047,
      keyword: searchTerm
    };

    let results = [
      {
        "geometry": {
          "location": {
            "lat": 33.7682317,
            "lng": -118.186556
          },
          "viewport": {
            "south": 33.7668067197085,
            "west": -118.18790453029152,
            "north": 33.7695046802915,
            "east": -118.1852065697085
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "a57b362b1cca3168ff07e2c3d89e5d6ae468c9f6",
        "name": "Utopia Good Food & Fine Art",
        "opening_hours": {
          "open_now": true,
          "weekday_text": []
        },
        "photos": [
          {
            "height": 1019,
            "html_attributions": [
              "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
            ],
            "width": 1019
          }
        ],
        "place_id": "ChIJca74PTwx3YARga8E1yYoPtc",
        "price_level": 2,
        "rating": 4.4,
        "reference": "CmRSAAAAwVUtDz4bpUvRmuA9Axfc3inP-zmgL6kZcaxJLgdhHxNfqzJPULnB_koqRmzrB464DpRKFlpEmU4wRkpB9H0kJwEre7rgJRnJOU8F0AILqGDb7ZTTVWXg7ynzdjLqmxMxEhCjUr3W1WEyRlfL2mQb6EOBGhTAkqOO_Di_fP-SwGnMrpPYnjhMbw",
        "scope": "GOOGLE",
        "types": [
          "art_gallery",
          "bar",
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
        ],
        "vicinity": "445 East First Street, Long Beach",
        "html_attributions": []
      },
      {
        "geometry": {
          "location": {
            "lat": 33.7754727,
            "lng": -118.15763850000002
          },
          "viewport": {
            "south": 33.77405501970851,
            "west": -118.15898778029151,
            "north": 33.7767529802915,
            "east": -118.15628981970849
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "969c271a21456ee76ea8a6dcf9f457e1bb5d005a",
        "name": "Rivera's",
        "opening_hours": {
          "open_now": true,
          "weekday_text": []
        },
        "photos": [
          {
            "height": 2340,
            "html_attributions": [
              "<a href=\"https://maps.google.com/maps/contrib/101263093871637218410/photos\">Edgar Moreno</a>"
            ],
            "width": 4160
          }
        ],
        "place_id": "ChIJI-mPR6cx3YARTkYSBhlf6_0",
        "rating": 4.8,
        "reference": "CmRSAAAAxcm_-z8LMj20seJO5q1o9VHS1KttBsCo2hHaI0nKhJJ6fcEknuf3mQT3gLqhvJogkDZg89bH3r4_zwCuKMciE1N73aw5Urt-FuWZ-P6ZK5RuyvUoSkrmxnpstSOy25TIEhD3DGqoMVd1_x0L2gUYC7TlGhTsXm0O9LREeLZD3FUxqqsmZwyPHQ",
        "scope": "GOOGLE",
        "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
        ],
        "vicinity": "2901 East 7th Street, Long Beach",
        "html_attributions": []
      },
      {
        "geometry": {
          "location": {
            "lat": 33.790217,
            "lng": -118.13856699999997
          },
          "viewport": {
            "south": 33.78886701970849,
            "west": -118.14008548029153,
            "north": 33.79156498029149,
            "east": -118.13738751970851
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "f0fa37e6d8bfe7e25656932bcd4051b598c1644d",
        "name": "Chipotle Mexican Grill",
        "opening_hours": {
          "open_now": true,
          "weekday_text": []
        },
        "photos": [
          {
            "height": 4160,
            "html_attributions": [
              "<a href=\"https://maps.google.com/maps/contrib/105724775494744571892/photos\">Warren Malone</a>"
            ],
            "width": 3120
          }
        ],
        "place_id": "ChIJtwcUXpQx3YAR8wdR6zTkhOQ",
        "price_level": 1,
        "rating": 4.1,
        "reference": "CmRSAAAAxoFWvRubtrOBbCKkuQArFo5O-NEUFUp9wtzSE5ZZTJaCBfVbj9m2nZwyLnZ5TyWZymQcsFK24I7kaCZHFpJcDj8kv1qVrR0qs8hE02egmOGi03P7mTLp6niLWgxdU7QrEhCYRc-Ij1CPPHdQmOnHeFJ3GhRcA9StNVz2SSe1bcX-Od6PddjG4w",
        "scope": "GOOGLE",
        "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
        ],
        "vicinity": "1800 Ximeno Avenue, Long Beach",
        "html_attributions": []
      }
    ];

    // results = [];

    // let callback = (response, status, pagination) => {
    //   if (status == google.maps.places.PlacesServiceStatus.OK) {
    //     for (let i = 0; i < response.length; i++) {
    //       results.push(response[i]);
    //     }
    //     // console.log(JSON.stringify(response, null, 2));

    //     if (pagination.hasNextPage) {
    //       console.log('pagination true');
    //     }
    //     console.log(results);
    //     return results;
    //   };
    // }
    // this.placesService.nearbySearch(req, callback);
      
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