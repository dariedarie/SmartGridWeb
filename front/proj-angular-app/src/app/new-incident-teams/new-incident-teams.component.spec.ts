import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentTeamsComponent } from './new-incident-teams.component';

describe('NewIncidentTeamsComponent', () => {
  let component: NewIncidentTeamsComponent;
  let fixture: ComponentFixture<NewIncidentTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
