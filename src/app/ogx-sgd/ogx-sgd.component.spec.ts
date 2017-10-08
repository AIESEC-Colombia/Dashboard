import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgxSgdComponent } from './ogx-sgd.component';

describe('OgxSgdComponent', () => {
  let component: OgxSgdComponent;
  let fixture: ComponentFixture<OgxSgdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgxSgdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgxSgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
