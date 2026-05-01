import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Method } from './method';

describe('Method', () => {
  let component: Method;
  let fixture: ComponentFixture<Method>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Method]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Method);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
