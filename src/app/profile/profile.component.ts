import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { Employeedetails2Component } from '../employeedetails2/employeedetails2.component';
import { VacationrequestcardComponent } from '../vacationrequestcard/vacationrequestcard.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent, Employeedetails2Component, VacationrequestcardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  cards = [1, 2, 3, 4, 5, 6, 7];
}
