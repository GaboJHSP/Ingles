import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensivoComponent } from './intensivo.component';

describe('IntensivoComponent', () => {
  let component: IntensivoComponent;
  let fixture: ComponentFixture<IntensivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntensivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
