import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vacationrequest1Component } from './vacationrequest1.component';

describe('Vacationrequest1Component', () => {
  let component: Vacationrequest1Component;
  let fixture: ComponentFixture<Vacationrequest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vacationrequest1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vacationrequest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
