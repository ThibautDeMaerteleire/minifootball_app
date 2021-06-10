import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeMatchesTeamComponent } from './practice-matches-team.component';

describe('PracticeMatchesTeamComponent', () => {
  let component: PracticeMatchesTeamComponent;
  let fixture: ComponentFixture<PracticeMatchesTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeMatchesTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeMatchesTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
