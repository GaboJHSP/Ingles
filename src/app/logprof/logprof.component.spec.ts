import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogprofComponent } from './logprof.component';

describe('LogprofComponent', () => {
  let component: LogprofComponent;
  let fixture: ComponentFixture<LogprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogprofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
