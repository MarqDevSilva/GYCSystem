import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaSobreLocalComponent } from './capa-sobre-local.component';

describe('CapaSobreLocalComponent', () => {
  let component: CapaSobreLocalComponent;
  let fixture: ComponentFixture<CapaSobreLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaSobreLocalComponent]
    });
    fixture = TestBed.createComponent(CapaSobreLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
