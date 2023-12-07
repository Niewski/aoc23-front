import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-day-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './day-two.component.html',
  styleUrl: './day-two.component.css'
})
export class DayTwoComponent {
  inputString: string = '';
  resultPartOne: number | null = null;
  resultPartTwo: number | null = null;
  constructor(private apiService: ApiService) { }

  submit() {
    const input = this.inputString.trim();
    console.log('Input: ', input);
    this.apiService.solveDayTwo(input).subscribe({
      next: (response) => {
        this.resultPartOne = response.resultPartOne;
        this.resultPartTwo = response.resultPartTwo;
      },
      error: (error) => {
        console.error('Error: ', error); // Handle the error scenario
        this.resultPartOne = this.resultPartTwo = null;
      },
      // Optionally, you can add a 'complete' callback if needed
      complete: () => console.log('Observable completed')
    });
  }

}
