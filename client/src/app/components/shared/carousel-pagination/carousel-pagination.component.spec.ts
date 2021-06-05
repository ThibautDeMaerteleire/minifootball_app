import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselPaginationComponent } from './carousel-pagination.component';

describe('CarousselPaginationComponent', () => {
  let component: CarousselPaginationComponent;
  let fixture: ComponentFixture<CarousselPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousselPaginationComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousselPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
