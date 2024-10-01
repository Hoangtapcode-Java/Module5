import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss4HackerNewsComponent } from './ss4-hacker-news.component';

describe('Ss4HackerNewsComponent', () => {
  let component: Ss4HackerNewsComponent;
  let fixture: ComponentFixture<Ss4HackerNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss4HackerNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss4HackerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
