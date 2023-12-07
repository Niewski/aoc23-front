import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-day-three',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './day-three.component.html',
  styleUrl: './day-three.component.css'
})
export class DayThreeComponent {
  inputString: string = '';
  resultPartOne: number | null = null;
  resultPartTwo: number | null = null;
  constructor(private apiService: ApiService) { }

  submit() { 
    // Split the string by line breaks to create rows
    const rows = this.inputString.split(/\r?\n/).filter(input => input.trim() !== '');

    // Split each row into characters to create columns
    const inputs = rows.map(row => row.split(''));

    console.log('Inputs: ', inputs);
    this.apiService.solveDayThree(inputs).subscribe({
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
