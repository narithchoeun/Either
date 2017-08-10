import { Component, OnInit } from '@angular/core';
import { SelectedPlacesService } from '../../services/shared/selected-places.service';

@Component({
  selector: 'app-selected-places',
  templateUrl: './selected-places.component.html',
  styleUrls: ['./selected-places.component.css']
})
export class SelectedPlacesComponent implements OnInit {
  public places: any[] = [];

  constructor(private _selectedPlacesService: SelectedPlacesService) { }

  ngOnInit() {
    this.places = this._selectedPlacesService.getPlaces();
  }
}
