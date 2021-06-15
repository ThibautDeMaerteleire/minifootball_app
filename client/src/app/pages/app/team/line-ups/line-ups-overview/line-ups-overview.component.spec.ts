import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpsOverviewComponent } from './line-ups-overview.component';

describe('LineUpsOverviewComponent', () => {
  let component: LineUpsOverviewComponent;
  let fixture: ComponentFixture<LineUpsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUpsOverviewComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUpsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
