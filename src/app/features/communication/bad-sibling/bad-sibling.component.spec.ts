import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadSiblingComponent } from './bad-sibling.component';

describe('BadSiblingComponent', () => {
  let component: BadSiblingComponent;
  let fixture: ComponentFixture<BadSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
