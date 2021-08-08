import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocumentChecklistComponent } from './new-document-checklist.component';

describe('NewDocumentChecklistComponent', () => {
  let component: NewDocumentChecklistComponent;
  let fixture: ComponentFixture<NewDocumentChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDocumentChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDocumentChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
