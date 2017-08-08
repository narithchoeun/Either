import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPlacesComponent } from './selected-places.component';

describe('SelectedPlacesComponent', () => {
  let component: SelectedPlacesComponent;
  let fixture: ComponentFixture<SelectedPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
