import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCreateTeamComponent } from './info-create-team.component';

describe('InfoCreateTeamComponent', () => {
  let component: InfoCreateTeamComponent;
  let fixture: ComponentFixture<InfoCreateTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCreateTeamComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
