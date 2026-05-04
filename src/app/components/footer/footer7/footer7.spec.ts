import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer7 } from './footer7';

describe('Footer7', () => {
  let component: Footer7;
  let fixture: ComponentFixture<Footer7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
