import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrOgeComponent } from './ur-oge.component';

describe('UrOgeComponent', () => {
  let component: UrOgeComponent;
  let fixture: ComponentFixture<UrOgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrOgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrOgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
