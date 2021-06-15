import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpsDetailComponent } from './line-ups-detail.component';

describe('LineUpsDetailComponent', () => {
  let component: LineUpsDetailComponent;
  let fixture: ComponentFixture<LineUpsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUpsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUpsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
