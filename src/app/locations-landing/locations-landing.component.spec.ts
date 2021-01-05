import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsLandingComponent } from './locations-landing.component';

describe('LocationsLandingComponent', () => {
  let component: LocationsLandingComponent;
  let fixture: ComponentFixture<LocationsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
