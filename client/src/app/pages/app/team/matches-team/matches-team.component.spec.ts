import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesTeamComponent } from './matches-team.component';

describe('MatchesTeamComponent', () => {
  let component: MatchesTeamComponent;
  let fixture: ComponentFixture<MatchesTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
