import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBar } from './nav-bar';

describe('StudentEdit', () => {
  let component: NavigationBar;
  let fixture: ComponentFixture<NavigationBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
