import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationSingle } from './integration-single';

describe('IntegrationSingle', () => {
  let component: IntegrationSingle;
  let fixture: ComponentFixture<IntegrationSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationSingle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
