import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../services/google-places/google-places.service';
import { PlaceDetails } from '../../models/place-details';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  place;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _placesService: GooglePlacesService
  ) { }

  ngOnInit() {
    // Grab route parameter and make place request
    // this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this._placesService.getPlaceDetail(params.get('id')))
    //   .subscribe((place: PlaceDetails) => { this.place = place; console.log(JSON.stringify(this.place, null, 2)); });
    
    this.place = 
    {
      "address_components": [
        {
          "long_name": "445",
          "short_name": "445",
          "types": [
            "street_number"
          ]
        },
        {
          "long_name": "East First Street",
          "short_name": "E First St",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "Downtown",
          "short_name": "Downtown",
          "types": [
            "neighborhood",
            "political"
          ]
        },
        {
          "long_name": "Long Beach",
          "short_name": "Long Beach",
          "types": [
            "locality",
            "political"
          ]
        },
        {
          "long_name": "Los Angeles County",
          "short_name": "Los Angeles County",
          "types": [
            "administrative_area_level_2",
            "political"
          ]
        },
        {
          "long_name": "California",
          "short_name": "CA",
          "types": [
            "administrative_area_level_1",
            "political"
          ]
        },
        {
          "long_name": "United States",
          "short_name": "US",
          "types": [
            "country",
            "political"
          ]
        },
        {
          "long_name": "90802",
          "short_name": "90802",
          "types": [
            "postal_code"
          ]
        }
      ],
        "adr_address": "<span class=\"street-address\">445 E First St</span>, <span class=\"locality\">Long Beach</span>, <span class=\"region\">CA</span> <span class=\"postal-code\">90802</span>, <span class=\"country-name\">USA</span>",
          "formatted_address": "445 E First St, Long Beach, CA 90802, USA",
            "formatted_phone_number": "(562) 432-6888",
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
          "international_phone_number": "+1 562-432-6888",
            "name": "Utopia Good Food & Fine Art",
              "opening_hours": {
        "open_now": true,
          "periods": [
            {
              "close": {
                "day": 1,
                "time": "2100",
                "hours": 21,
                "minutes": 0,
                "nextDate": 1503979200000
              },
              "open": {
                "day": 1,
                "time": "1200",
                "hours": 12,
                "minutes": 0,
                "nextDate": 1503946800000
              }
            },
            {
              "close": {
                "day": 2,
                "time": "2100",
                "hours": 21,
                "minutes": 0,
                "nextDate": 1503460800000
              },
              "open": {
                "day": 2,
                "time": "1200",
                "hours": 12,
                "minutes": 0,
                "nextDate": 1504033200000
              }
            },
            {
              "close": {
                "day": 3,
                "time": "2100",
                "hours": 21,
                "minutes": 0,
                "nextDate": 1503547200000
              },
              "open": {
                "day": 3,
                "time": "1200",
                "hours": 12,
                "minutes": 0,
                "nextDate": 1503514800000
              }
            },
            {
              "close": {
                "day": 4,
                "time": "2100",
                "hours": 21,
                "minutes": 0,
                "nextDate": 1503633600000
              },
              "open": {
                "day": 4,
                "time": "1200",
                "hours": 12,
                "minutes": 0,
                "nextDate": 1503601200000
              }
            },
            {
              "close": {
                "day": 5,
                "time": "2100",
                "hours": 21,
                "minutes": 0,
                "nextDate": 1503720000000
              },
              "open": {
                "day": 5,
                "time": "1200",
                "hours": 12,
                "minutes": 0,
                "nextDate": 1503687600000
              }
            },
            {
              "close": {
                "day": 6,
                "time": "2100",
                "hours": 21,
                "minutes": 0,
                "nextDate": 1503806400000
              },
              "open": {
                "day": 6,
                "time": "1700",
                "hours": 17,
                "minutes": 0,
                "nextDate": 1503792000000
              }
            }
          ],
            "weekday_text": [
              "Monday: 12:00 – 9:00 PM",
              "Tuesday: 12:00 – 9:00 PM",
              "Wednesday: 12:00 – 9:00 PM",
              "Thursday: 12:00 – 9:00 PM",
              "Friday: 12:00 – 9:00 PM",
              "Saturday: 5:00 – 9:00 PM",
              "Sunday: Closed"
            ]
      },
      "photos": [
        {
          "height": 1019,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
          ],
          "width": 1019
        },
        {
          "height": 664,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
          ],
          "width": 1000
        },
        {
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
          ],
          "width": 3024
        },
        {
          "height": 3456,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101183189993115226419/photos\">cmilton111</a>"
          ],
          "width": 4608
        },
        {
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
          ],
          "width": 3024
        },
        {
          "height": 400,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
          ],
          "width": 600
        },
        {
          "height": 2950,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
          ],
          "width": 2950
        },
        {
          "height": 1265,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/116733448871259937140/photos\">Amir Zee</a>"
          ],
          "width": 949
        },
        {
          "height": 2848,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
          ],
          "width": 3369
        },
        {
          "height": 367,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101278429782662628649/photos\">Utopia Good Food &amp; Fine Art</a>"
          ],
          "width": 550
        }
      ],
        "place_id": "ChIJca74PTwx3YARga8E1yYoPtc",
          "price_level": 2,
            "rating": 4.5,
              "reference": "CmRSAAAAWRW6DP2dqrxe_UyReSM6E4B-W7KT0ojzcifteq8IwflnYSsBVT4fn6c9u2anqz-AfByVJJrh6Io2KhMpkG-kylKxZaxunDajtUaYWlo7q7CziG3IbmZ1eJ7DcH1IDALLEhA6xUT4k_N_n5l-xolhY0BnGhSxkMyIrE48RZwFNPRYSQRnewHY2A",
                "reviews": [
                  {
                    "author_name": "Marty Lawrence",
                    "author_url": "https://www.google.com/maps/contrib/115760445699990618218/reviews",
                    "language": "en",
                    "profile_photo_url": "https://lh6.googleusercontent.com/-Rids1F9Bm-0/AAAAAAAAAAI/AAAAAAAARyw/4yIPLr2-kso/s128-c0x00000000-cc-rp-mo-ba2/photo.jpg",
                    "rating": 5,
                    "relative_time_description": "in the last week",
                    "text": "This blessed discovery that I made at the start of my Long Beach Jazz Festival vacation brought me back a second time on my final day. Unbelievable service and food. You cannot go wrong and I could safely speculate Utopia is among the best eateries in all of California. Wonderful experience! Kudos to Nick, Abby and Mathew!",
                    "time": 1502926808
                  },
                  {
                    "author_name": "Tsuyosh Morino",
                    "author_url": "https://www.google.com/maps/contrib/109852465864947209019/reviews",
                    "language": "en",
                    "profile_photo_url": "https://lh4.googleusercontent.com/-gIEquITRu8Y/AAAAAAAAAAI/AAAAAAAAALg/KocWMb_LWk0/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
                    "rating": 5,
                    "relative_time_description": "2 months ago",
                    "text": "Significantly best place I ever had food and drink. First I went for a lunch. Ordered pasta and requested some arrangement (add shrimps) and waiter didn't claim. The dish was great. You can visit with families. Dating here was what I want to do (guess you imply). Staying at Belmont or other places, go here at east village! Good wine too.",
                    "time": 1495707271
                  },
                  {
                    "author_name": "DW G",
                    "author_url": "https://www.google.com/maps/contrib/101895466486422136103/reviews",
                    "language": "en",
                    "profile_photo_url": "https://lh5.googleusercontent.com/-E9Ex1l1YcX8/AAAAAAAAAAI/AAAAAAAAHag/sXcX3Qw27XM/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
                    "rating": 5,
                    "relative_time_description": "3 months ago",
                    "text": "A neighborhood cornerstone with consistently good food. Also boasts the best wait staff around. Serving their red wine \"captains\" by the bottle at about 58F, but some of it may not be on the list, so if you like that sort of thing, ask what they have in the chiller. At least some of the wait staff is vegetarian, and the restaurant will try to modify its recipes to suit your special needs (or even just wants).",
                    "time": 1494641997
                  },
                  {
                    "author_name": "Jeremy Tofte",
                    "author_url": "https://www.google.com/maps/contrib/102776906079552272126/reviews",
                    "language": "en",
                    "profile_photo_url": "https://lh6.googleusercontent.com/-AnPuioCweuY/AAAAAAAAAAI/AAAAAAAAAAo/5J8LIbMZyJo/s128-c0x00000000-cc-rp-mo/photo.jpg",
                    "rating": 5,
                    "relative_time_description": "3 weeks ago",
                    "text": "Great place to eat. Loved the outdoor patio area. Loved my burger!",
                    "time": 1501214908
                  },
                  {
                    "author_name": "Paul Hubans",
                    "author_url": "https://www.google.com/maps/contrib/103763367008083283838/reviews",
                    "language": "en",
                    "profile_photo_url": "https://lh5.googleusercontent.com/-j4vCH3sLJlE/AAAAAAAAAAI/AAAAAAAAAPo/XRxQGzTBfcs/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                    "rating": 3,
                    "relative_time_description": "6 months ago",
                    "text": "I went here for Valentine's Day with my girlfriend and was disappointed that they were offering a limited menu for the occasion because I had already looked at their menu the night before and made up my mind on what to order. After tax and tip, the bill came out to $165 for the both of us... and for that price, I was expecting a little better.\n\nThe food was good but the portions were on the small side and nothing really stood out as remarkable. The atmosphere was okay; the place was mostly empty and they had someone playing piano, which was nice. The staff was friendly and welcoming; our server was probably the highlight of the experience.\n\nMaybe the whole fancy bistro dining experience just isn't for me? For the price I paid we could have eaten at 2 or 3 quality restaurants that would have tasted just as good and probably would have been more satisfying.",
                    "time": 1487760494
                  }
                ],
                  "scope": "GOOGLE",
                    "types": [
                      "art_gallery",
                      "bar",
                      "restaurant",
                      "food",
                      "point_of_interest",
                      "establishment"
                    ],
                      "url": "https://maps.google.com/?cid=15509878313991843713",
                        "utc_offset": -420,
                          "vicinity": "445 East First Street, Long Beach",
                            "website": "http://www.utopiarestaurant.net/",
                              "html_attributions": []
    }
  }
}
