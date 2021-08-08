import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentOpremaComponent } from './new-incident-oprema.component';

describe('NewIncidentOpremaComponent', () => {
  let component: NewIncidentOpremaComponent;
  let fixture: ComponentFixture<NewIncidentOpremaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentOpremaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentOpremaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
