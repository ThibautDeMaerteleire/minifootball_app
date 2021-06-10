import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayersTeamComponent } from './add-players-team.component';

describe('AddPlayersTeamComponent', () => {
  let component: AddPlayersTeamComponent;
  let fixture: ComponentFixture<AddPlayersTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayersTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayersTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
