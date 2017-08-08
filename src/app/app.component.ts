import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from './services/google-places.service';
import { SelectedPlacesService } from './services/shared/selected-places.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit { 
  constructor(private _selectedPlacesService: SelectedPlacesService) { }

  ngOnInit() {
  }
}
