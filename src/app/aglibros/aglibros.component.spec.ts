import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AglibrosComponent } from './aglibros.component';

describe('AglibrosComponent', () => {
  let component: AglibrosComponent;
  let fixture: ComponentFixture<AglibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AglibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AglibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
