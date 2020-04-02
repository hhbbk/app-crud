import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscripComponent } from './form-inscrip.component';

describe('FormInscripComponent', () => {
  let component: FormInscripComponent;
  let fixture: ComponentFixture<FormInscripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInscripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInscripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
