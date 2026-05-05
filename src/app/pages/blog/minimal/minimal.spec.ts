import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minimal } from './minimal';

describe('Minimal', () => {
  let component: Minimal;
  let fixture: ComponentFixture<Minimal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minimal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Minimal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
