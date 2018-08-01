import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkComponentComponent } from './cdk-component.component';

describe('CdkComponentComponent', () => {
  let component: CdkComponentComponent;
  let fixture: ComponentFixture<CdkComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
