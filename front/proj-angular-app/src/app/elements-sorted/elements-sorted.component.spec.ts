import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsSortedComponent } from './elements-sorted.component';

describe('ElementsSortedComponent', () => {
  let component: ElementsSortedComponent;
  let fixture: ComponentFixture<ElementsSortedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsSortedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
