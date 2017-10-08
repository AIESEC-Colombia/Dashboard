import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrOgtComponent } from './ur-ogt.component';

describe('UrOgtComponent', () => {
  let component: UrOgtComponent;
  let fixture: ComponentFixture<UrOgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrOgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrOgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
