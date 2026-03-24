import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomoComp } from './homo-comp';

describe('HomoComp', () => {
  let component: HomoComp;
  let fixture: ComponentFixture<HomoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomoComp],
    }).compileComponents();

    fixture = TestBed.createComponent(HomoComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
