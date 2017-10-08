import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcxSgdComponent } from './icx-sgd.component';

describe('IcxSgdComponent', () => {
  let component: IcxSgdComponent;
  let fixture: ComponentFixture<IcxSgdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcxSgdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcxSgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
