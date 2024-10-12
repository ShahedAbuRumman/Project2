import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeedetails1Component } from './employeedetails1.component';

describe('Employeedetails1Component', () => {
  let component: Employeedetails1Component;
  let fixture: ComponentFixture<Employeedetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeedetails1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Employeedetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
