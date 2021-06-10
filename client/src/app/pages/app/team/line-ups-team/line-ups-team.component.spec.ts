import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpsTeamComponent } from './line-ups-team.component';

describe('LineUpsTeamComponent', () => {
  let component: LineUpsTeamComponent;
  let fixture: ComponentFixture<LineUpsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUpsTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUpsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
