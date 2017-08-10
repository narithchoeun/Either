import { Component, OnInit } from '@angular/core';
import { SelectedPlacesService } from '../../services/shared/selected-places.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _selectedPlacesService: SelectedPlacesService) { }

  ngOnInit() {
  }

  

}
