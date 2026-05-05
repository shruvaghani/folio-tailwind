import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Integrate } from './integrate';

describe('Integrate', () => {
  let component: Integrate;
  let fixture: ComponentFixture<Integrate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Integrate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Integrate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
