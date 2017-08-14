import { Injectable } from '@angular/core';

@Injectable()
export class SelectedPlacesService {
  constructor() { }

  private selectedPlaces = [];
  private selectedPlace;
  // private onPlacePush: EventEmitter = new EventEmitter();

  pushPlace(place) {
    this.selectedPlaces.push(place);
  }

  getSelectedLength(): number {
    return this.selectedPlaces.length;
  }

  getPlaces(): any[] {
    return this.selectedPlaces;
  }

  setRandomSelection(place) {
    this.selectedPlace = place;
  }

  getRandomSelection() {
    return this.selectedPlace;
  }
  
}