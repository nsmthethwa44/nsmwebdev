import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMarquee } from './icon-marquee';

describe('IconMarquee', () => {
  let component: IconMarquee;
  let fixture: ComponentFixture<IconMarquee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMarquee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMarquee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
