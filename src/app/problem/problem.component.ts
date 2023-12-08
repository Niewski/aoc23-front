import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.css'
})
export class ProblemComponent implements OnInit {
  title!: string;
  submitFunction!: Function;
  inputString: string = '';
  resultPartOne: number | null = null;
  resultPartTwo: number | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.title = data['title'];
      const functionName = data['submitFunction'] as keyof ApiService;
      this.submitFunction = this.apiService[functionName].bind(this.apiService);
    });
  }

  submit() {
    this.submitFunction(this.inputString).subscribe({
      next: (response: { resultPartOne: number | null; resultPartTwo: number | null; }) => {
        this.resultPartOne = response.resultPartOne;
        this.resultPartTwo = response.resultPartTwo;
      },
      error: (error: any) => {
        console.error('Error: ', error); // Handle the error scenario
        this.resultPartOne = this.resultPartTwo = null;
      },
      // Optionally, you can add a 'complete' callback if needed
      complete: () => console.log('Observable completed')
    });
  }

}
