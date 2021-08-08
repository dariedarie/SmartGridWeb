import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocumentBasicInfComponent } from './new-document-basic-inf.component';

describe('NewDocumentBasicInfComponent', () => {
  let component: NewDocumentBasicInfComponent;
  let fixture: ComponentFixture<NewDocumentBasicInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDocumentBasicInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDocumentBasicInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
