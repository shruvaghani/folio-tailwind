import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer6 } from './footer6';

describe('Footer6', () => {
  let component: Footer6;
  let fixture: ComponentFixture<Footer6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
