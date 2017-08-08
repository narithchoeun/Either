import { Injectable } from '@angular/core';

@Injectable()
export class SelectedPlacesService {
  constructor() { }

  private selectedPlaces = [];

  pushPlace(place) {
    this.selectedPlaces.push(place);
  }

  getSelectedLength(): number {
    return this.selectedPlaces.length;
  }
}