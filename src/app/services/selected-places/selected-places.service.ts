import { Injectable } from '@angular/core';

@Injectable()
export class SelectedPlacesService {
  private selectedPlaces = [];
  private selectedPlace;

  constructor() { }

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