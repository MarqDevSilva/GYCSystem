import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorNavBarComponent } from './creator-nav-bar.component';

describe('CreatorNavBarComponent', () => {
  let component: CreatorNavBarComponent;
  let fixture: ComponentFixture<CreatorNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorNavBarComponent]
    });
    fixture = TestBed.createComponent(CreatorNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
