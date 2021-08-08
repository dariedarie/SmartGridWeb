import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentResenjeComponent } from './new-incident-resenje.component';

describe('NewIncidentResenjeComponent', () => {
  let component: NewIncidentResenjeComponent;
  let fixture: ComponentFixture<NewIncidentResenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentResenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentResenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
