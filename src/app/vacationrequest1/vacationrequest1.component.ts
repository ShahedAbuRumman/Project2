import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { VacationrequestcardComponent } from '../vacationrequestcard/vacationrequestcard.component';
import { FormsModule } from '@angular/forms';
import { PagerComponent } from '../pager/pager.component';

@Component({
  selector: 'app-vacationrequest1',
  standalone: true,
  imports: [CommonModule, NavbarComponent, VacationrequestcardComponent, FormsModule, PagerComponent],
  templateUrl: './vacationrequest1.component.html',
  styleUrls: ['./vacationrequest1.component.css']
})
export class Vacationrequest1Component {
  searchText: string = '';
  selectAll: boolean = false;
  checkboxes: boolean[] = []; 
  cardDetails = [
    {
      employeeName: 'Ahmad Attar',
      submit: new Date(),
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED'
    },
    
  ];

  totalItems = 100; 
  itemsPerPage = 10; 
  currentPage = 1;

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Current Page:', this.currentPage);
   
  }
}











