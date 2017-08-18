import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {
  position: Position;

  constructor() { }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition, this.showError);
    } else {
      console.log('Geolocation not supported on this browser');
    }
  }
  
  getPosition(): Position {
    return this.position
  }

  setPosition = (position: Position) => {
    console.log(position);
    this.position = position;
  }

  showError = (error) => {
    console.log(error.message);
  }

}
