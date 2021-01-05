import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNavbarComponent } from './color-navbar.component';

describe('ColorNavbarComponent', () => {
  let component: ColorNavbarComponent;
  let fixture: ComponentFixture<ColorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
