import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaResultComponent } from './pretraga-result.component';

describe('PretragaResultComponent', () => {
  let component: PretragaResultComponent;
  let fixture: ComponentFixture<PretragaResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretragaResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
