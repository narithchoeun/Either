import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {
  constructor() { }

  getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: Position) => resolve(position), 
          (error) => console.error(error)
        );
      } else {
        reject('Geolocation is not supported on this browser');
      }
    });
  }

}
