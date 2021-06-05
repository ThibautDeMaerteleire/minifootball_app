import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCustomInputComponent } from './small-custom-input.component';

describe('SmallCustomInputComponent', () => {
  let component: SmallCustomInputComponent;
  let fixture: ComponentFixture<SmallCustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCustomInputComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
