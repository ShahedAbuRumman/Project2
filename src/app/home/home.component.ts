import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { Employeedetails1Component } from '../employeedetails1/employeedetails1.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImagesliderComponent } from '../imageslider/imageslider.component';
import { VacationrequestcardComponent } from "../vacationrequestcard/vacationrequestcard.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CardComponent, Employeedetails1Component, NavbarComponent, ImagesliderComponent, VacationrequestcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Welcome Back Hazem! Here are your latest updates.';
  
}
