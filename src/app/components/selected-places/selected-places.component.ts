import { Component, OnInit } from '@angular/core';
import { SelectedPlacesService } from '../../services/shared/selected-places.service';

@Component({
  selector: 'app-selected-places',
  templateUrl: './selected-places.component.html',
  styleUrls: ['./selected-places.component.css']
})
export class SelectedPlacesComponent implements OnInit {
  public places: any[] = [];
  private selectedPlace;

  constructor(private _selectedPlacesService: SelectedPlacesService) { }

  ngOnInit() {
    this.places = this._selectedPlacesService.getPlaces();
  }

  onRandomize() {
    // randomize place selection
    let randi = Math.floor(Math.random() * this.places.length);
    console.log(randi);
    this.selectedPlace = this.places[randi];
    console.log(this.selectedPlace);
  }

  onEdit() {
    console.log('edit');
  }

}