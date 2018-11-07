import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapbuttonComponent } from './mapbutton.component';

describe('MapbuttonComponent', () => {
  let component: MapbuttonComponent;
  let fixture: ComponentFixture<MapbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
