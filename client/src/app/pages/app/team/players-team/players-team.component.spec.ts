import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTeamComponent } from './players-team.component';

describe('PlayersTeamComponent', () => {
  let component: PlayersTeamComponent;
  let fixture: ComponentFixture<PlayersTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
