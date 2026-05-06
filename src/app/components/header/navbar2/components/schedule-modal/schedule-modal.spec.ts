import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleModal } from './schedule-modal';

describe('ScheduleModal', () => {
  let component: ScheduleModal;
  let fixture: ComponentFixture<ScheduleModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
