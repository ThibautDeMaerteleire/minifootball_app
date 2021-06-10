import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingTeamComponent } from './ranking-team.component';

describe('RankingTeamComponent', () => {
  let component: RankingTeamComponent;
  let fixture: ComponentFixture<RankingTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
