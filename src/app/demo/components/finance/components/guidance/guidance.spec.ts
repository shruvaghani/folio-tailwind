import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guidance } from './guidance';

describe('Guidance', () => {
  let component: Guidance;
  let fixture: ComponentFixture<Guidance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guidance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guidance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
