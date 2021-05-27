import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponentsModule } from '../../app-components.module';

import { SideNavComponent } from './side-nav.component';

describe('CardBaseComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppComponentsModule ],
      declarations: [ SideNavComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
