import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopTip } from './develop-tip';

describe('DevelopTip', () => {
  let component: DevelopTip;
  let fixture: ComponentFixture<DevelopTip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopTip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopTip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
