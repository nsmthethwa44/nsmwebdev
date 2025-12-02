import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eduction } from './eduction';

describe('Eduction', () => {
  let component: Eduction;
  let fixture: ComponentFixture<Eduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
