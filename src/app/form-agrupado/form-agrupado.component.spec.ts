import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgrupadoComponent } from './form-agrupado.component';

describe('FormAgrupadoComponent', () => {
  let component: FormAgrupadoComponent;
  let fixture: ComponentFixture<FormAgrupadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAgrupadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgrupadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
