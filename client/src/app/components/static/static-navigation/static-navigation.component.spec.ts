import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticNavigationComponent } from './static-navigation.component';

describe('StaticNavigationComponent', () => {
  let component: StaticNavigationComponent;
  let fixture: ComponentFixture<StaticNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticNavigationComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
