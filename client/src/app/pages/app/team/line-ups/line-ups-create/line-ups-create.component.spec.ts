import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpsCreateComponent } from './line-ups-create.component';

describe('LineUpsCreateComponent', () => {
  let component: LineUpsCreateComponent;
  let fixture: ComponentFixture<LineUpsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUpsCreateComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUpsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
