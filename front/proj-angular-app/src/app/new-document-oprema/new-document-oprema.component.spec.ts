import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocumentOpremaComponent } from './new-document-oprema.component';

describe('NewDocumentOpremaComponent', () => {
  let component: NewDocumentOpremaComponent;
  let fixture: ComponentFixture<NewDocumentOpremaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDocumentOpremaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDocumentOpremaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
