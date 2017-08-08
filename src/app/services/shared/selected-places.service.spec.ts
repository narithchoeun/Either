import { TestBed, inject } from '@angular/core/testing';

import { SelectedPlacesService } from './selected-places.service';

describe('SelectedPlacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedPlacesService]
    });
  });

  it('should ...', inject([SelectedPlacesService], (service: SelectedPlacesService) => {
    expect(service).toBeTruthy();
  }));
});
