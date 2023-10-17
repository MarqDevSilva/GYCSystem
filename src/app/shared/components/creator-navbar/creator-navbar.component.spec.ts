import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorNavbarComponent } from './creator-navbar.component';

describe('CreatorNavbarComponent', () => {
  let component: CreatorNavbarComponent;
  let fixture: ComponentFixture<CreatorNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorNavbarComponent]
    });
    fixture = TestBed.createComponent(CreatorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
