import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Effort } from './effort';

describe('Effort', () => {
  let component: Effort;
  let fixture: ComponentFixture<Effort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Effort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Effort);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
