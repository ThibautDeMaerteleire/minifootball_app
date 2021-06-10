import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTeamComponent } from './settings-team.component';

describe('SettingsTeamComponent', () => {
  let component: SettingsTeamComponent;
  let fixture: ComponentFixture<SettingsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
