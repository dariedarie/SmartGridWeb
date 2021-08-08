import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocumentMediaComponent } from './new-document-media.component';

describe('NewDocumentMediaComponent', () => {
  let component: NewDocumentMediaComponent;
  let fixture: ComponentFixture<NewDocumentMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDocumentMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDocumentMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
