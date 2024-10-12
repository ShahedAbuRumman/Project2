import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacationrequestcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacationrequestcard.component.html',
  styleUrls: ['./vacationrequestcard.component.css']
})
export class VacationrequestcardComponent {
  @Input() searchText: string = '';

  cards = [1, 2];
  cardDetails = [
    {
      employeeName: 'Ahmad Attar',
      submit: new Date(),
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED'
    },
   
  ];

  filteredCards() {
    if (!this.searchText) {
      return this.cardDetails;
    }

    const searchTextLower = this.searchText.toLowerCase();
    return this.cardDetails.filter(card =>
      card.employeeName.toLowerCase().includes(searchTextLower) ||
      card.duration.toLowerCase().includes(searchTextLower) ||
      card.salary.toLowerCase().includes(searchTextLower)
    );
  }

  highlightText(text: string, search: string) {
    if (!search) {
      return text;
    }

    const regex = new RegExp(`(${search})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
 
}







