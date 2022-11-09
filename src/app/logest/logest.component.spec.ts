import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogestComponent } from './logest.component';

describe('LogestComponent', () => {
  let component: LogestComponent;
  let fixture: ComponentFixture<LogestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
