import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-day-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './day-one.component.html',
  styleUrl: './day-one.component.css'
})
export class DayOneComponent {
  inputString: string = '';
  separator: string = ' ';
  result: number | null = null;
  constructor(private apiService: ApiService) { }

  submit() {
    const inputs = this.inputString.split(this.separator);
    this.apiService.solveDayOne(inputs).subscribe({
      next: (result) => {
        this.result = result; // Store the result to display in the template
      },
      error: (error) => {
        console.error('Error: ', error); // Handle the error scenario
        this.result = null;
      },
      // Optionally, you can add a 'complete' callback if needed
      complete: () => console.log('Observable completed')
    });
  }
}
