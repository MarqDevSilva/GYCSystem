import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorFooterComponent } from './creator-footer.component';

describe('CreatorFooterComponent', () => {
  let component: CreatorFooterComponent;
  let fixture: ComponentFixture<CreatorFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorFooterComponent]
    });
    fixture = TestBed.createComponent(CreatorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
