import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss4NavbarComponent } from './ss4-navbar.component';

describe('Ss4NavbarComponent', () => {
  let component: Ss4NavbarComponent;
  let fixture: ComponentFixture<Ss4NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss4NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss4NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
