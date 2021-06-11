import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPaginationComponent } from './carousel-pagination.component';

describe('CarousselPaginationComponent', () => {
  let component: CarouselPaginationComponent;
  let fixture: ComponentFixture<CarouselPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPaginationComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
