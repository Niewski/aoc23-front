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
    var inputs = [] as string[];
    if (this.separator === 'newline') {
      // Handle new line as a special case
      inputs = this.inputString.split(/\r?\n/).filter(input => input.trim() !== '');
    } else {
      // For other separators, use them as is
      inputs = this.inputString.split(this.separator).filter(input => input.trim() !== '');
    }
    console.log('Inputs: ', inputs);
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
