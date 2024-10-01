import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStoryScreenComponent } from './brand-story-screen.component';

describe('BrandStoryScreenComponent', () => {
  let component: BrandStoryScreenComponent;
  let fixture: ComponentFixture<BrandStoryScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandStoryScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandStoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
