import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberNavbarComponent } from './subscriber-navbar.component';

describe('SubscriberNavbarComponent', () => {
  let component: SubscriberNavbarComponent;
  let fixture: ComponentFixture<SubscriberNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriberNavbarComponent]
    });
    fixture = TestBed.createComponent(SubscriberNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
