import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keybenefits } from './keybenefits';

describe('Keybenefits', () => {
  let component: Keybenefits;
  let fixture: ComponentFixture<Keybenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keybenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keybenefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
