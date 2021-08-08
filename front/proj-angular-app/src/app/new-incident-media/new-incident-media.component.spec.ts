import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentMediaComponent } from './new-incident-media.component';

describe('NewIncidentMediaComponent', () => {
  let component: NewIncidentMediaComponent;
  let fixture: ComponentFixture<NewIncidentMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
