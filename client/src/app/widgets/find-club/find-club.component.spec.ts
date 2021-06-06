import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClubComponent } from './find-club.component';

describe('FindClubComponent', () => {
  let component: FindClubComponent;
  let fixture: ComponentFixture<FindClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindClubComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
