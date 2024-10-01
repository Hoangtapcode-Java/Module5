import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss4FooterComponent } from './ss4-footer.component';

describe('Ss4FooterComponent', () => {
  let component: Ss4FooterComponent;
  let fixture: ComponentFixture<Ss4FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss4FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss4FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
