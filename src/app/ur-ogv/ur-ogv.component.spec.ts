import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrOgvComponent } from './ur-ogv.component';

describe('UrOgvComponent', () => {
  let component: UrOgvComponent;
  let fixture: ComponentFixture<UrOgvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrOgvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrOgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
