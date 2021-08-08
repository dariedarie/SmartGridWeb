import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentBasicInfComponent } from './new-incident-basic-inf.component';

describe('NewIncidentBasicInfComponent', () => {
  let component: NewIncidentBasicInfComponent;
  let fixture: ComponentFixture<NewIncidentBasicInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentBasicInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentBasicInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
