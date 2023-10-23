import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMotionComponent } from './e-motion.component';

describe('EMotionComponent', () => {
  let component: EMotionComponent;
  let fixture: ComponentFixture<EMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
