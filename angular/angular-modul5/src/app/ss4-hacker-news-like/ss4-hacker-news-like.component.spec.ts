import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss4HackerNewsLikeComponent } from './ss4-hacker-news-like.component';

describe('Ss4HackerNewsLikeComponent', () => {
  let component: Ss4HackerNewsLikeComponent;
  let fixture: ComponentFixture<Ss4HackerNewsLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss4HackerNewsLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss4HackerNewsLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
