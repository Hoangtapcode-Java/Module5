import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateComponentComponent } from './calculate-component.component';

describe('CalculateComponentComponent', () => {
  let component: CalculateComponentComponent;
  let fixture: ComponentFixture<CalculateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
