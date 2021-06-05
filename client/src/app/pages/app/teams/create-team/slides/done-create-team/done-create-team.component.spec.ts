import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneCreateTeamComponent } from './done-create-team.component';

describe('DoneCreateTeamComponent', () => {
  let component: DoneCreateTeamComponent;
  let fixture: ComponentFixture<DoneCreateTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneCreateTeamComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneCreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
