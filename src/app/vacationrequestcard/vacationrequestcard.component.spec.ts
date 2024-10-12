import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationrequestcardComponent } from './vacationrequestcard.component';

describe('VacationrequestcardComponent', () => {
  let component: VacationrequestcardComponent;
  let fixture: ComponentFixture<VacationrequestcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationrequestcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationrequestcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
