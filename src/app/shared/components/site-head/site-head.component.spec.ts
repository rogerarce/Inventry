import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeadComponent } from './site-head.component';

describe('SiteHeadComponent', () => {
  let component: SiteHeadComponent;
  let fixture: ComponentFixture<SiteHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
